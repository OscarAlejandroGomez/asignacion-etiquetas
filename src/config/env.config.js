import { config } from 'dotenv';

config();

export const AWS_REGION = process.env.AWS_REGION;
export const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
export const S3_NAME = process.env.S3_NAME;
export const POLYGONS_KEY = process.env.POLYGONS_KEY;
export const PORT = process.env.PORT;
export const SESSION_TOKEN = process.env.SESSION_TOKEN;