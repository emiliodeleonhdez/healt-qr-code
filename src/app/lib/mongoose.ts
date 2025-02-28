import mongoose from "mongoose";
import chalk from "chalk";
import { mongoUri } from "../common";

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Extiende globalThis para incluir nuestra caché de conexión de Mongoose
const globalWithMongoose = globalThis as typeof globalThis & {
  mongooseCached?: MongooseCache;
};

// Si aún no existe, inicializamos la caché
if (!globalWithMongoose.mongooseCached) {
  globalWithMongoose.mongooseCached = { conn: null, promise: null };
}

const cached = globalWithMongoose.mongooseCached;

const connectDb = async () => {
  // Si ya tenemos conexión, la retornamos
  if (cached.conn) {
    console.log(chalk.green("MongoDB is already connected."));
    return cached.conn;
  }

  // Si no existe la promesa, la creamos
  if (!cached.promise) {
    console.log(chalk.blue("Connecting to MongoDB..."));
    cached.promise = mongoose.connect(mongoUri!, {
      bufferCommands: false,
    });
  }

  try {
    const mongooseConnection = await cached.promise;
    cached.conn = mongooseConnection;
    console.log(chalk.green("Successfully connected to MongoDB."));
    return mongooseConnection;
  } catch (error) {
    console.error(chalk.red("Error connecting to MongoDB:", error));
    throw error;
  }
};

export default connectDb;
