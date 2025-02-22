import mongoose from 'mongoose';
import chalk from 'chalk';

const connectDb = async () => {

  const mongoUri = process.env.NODE_ENV === "development" ? process.env.MONGODB_URI_DEV : process.env.MONGODB_URI

  if (mongoose.connections[0].readyState) {
    console.log(chalk.green('MongoDB is already connected.'));
    return;
  }

  try {
    console.log(chalk.blue('Connecting to MongoDB...'));
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log(chalk.green('Successfully connected to MongoDB.'));
  } catch (error) {
    console.error(chalk.red('Error connecting to MongoDB:', error));
  }
};

export default connectDb;
