import mongoose from 'mongoose';
import chalk from 'chalk';
import { mongoUri } from '../common';

const connectDb = async () => {

  if (mongoose.connections[0].readyState) {
    console.log(chalk.green('MongoDB is already connected.'));
    return;
  }

  try {
    console.log(chalk.blue('Connecting to MongoDB...'));
    await mongoose.connect(mongoUri!);
    console.log(chalk.green('Successfully connected to MongoDB.'));
  } catch (error) {
    console.error(chalk.red('Error connecting to MongoDB:', error));
  }
};

export default connectDb;
