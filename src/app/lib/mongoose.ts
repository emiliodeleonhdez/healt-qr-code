import mongoose from 'mongoose';
import chalk from 'chalk';
import { mongoUri } from '../common';

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

const globalWithMongoose = globalThis as typeof globalThis & {
  mongooseCached?: MongooseCache;
};

if (!globalWithMongoose.mongooseCached) {
  globalWithMongoose.mongooseCached = { conn: null, promise: null };
}

const cached = globalWithMongoose.mongooseCached;

const connectDb = async () => {
  if (cached.conn) {
    console.log(chalk.green('MongoDB is already connected.'));
    return cached.conn;
  }

  if (!cached.promise) {
    console.log(chalk.green('Connecting to MongoDB...'));
    cached.promise = mongoose.connect(mongoUri!, {
      bufferCommands: false,
    });
  }

  try {
    const mongooseConnection = await cached.promise;
    cached.conn = mongooseConnection;
    console.log(chalk.green('Successfully connected to MongoDB.'));
    return mongooseConnection;
  } catch (error) {
    console.error(chalk.red('Error connecting to MongoDB:', error));
    throw error;
  }
};

export default connectDb;
