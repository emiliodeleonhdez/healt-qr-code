export const apiPrefix = 'api/';

export enum API_COLLECTION {
  users = 'users/',
}

export const mongoUri =
  process.env.NODE_ENV === 'development'
    ? process.env.MONGODB_URI_DEV
    : process.env.MONGODB_URI;

export enum MEDISCAN_PATHS {
  REGISTER = 'https://forms.gle/66UTP3zE4ppKw1DcA',
}
