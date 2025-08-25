export const apiPrefix = 'api/';

export enum API_COLLECTION {
  users = 'users/',
}

export const mongoUri =
  process.env.NODE_ENV === 'development'
    ? process.env.MONGODB_URI_DEV
    : process.env.MONGODB_URI;
