import { config } from "dotenv";

const env = process.env.NODE_ENV || false;
if (!env) process.exit(100);

config({ path: `bin/.env.${env}` });

export default () => ({
  PORT: process.env.PORT,
  ENV: process.env.NODE_ENV,
  DB_URL: process.env.URI,
  DB_Name: process.env.DB_NAME,
  APPLE_URL:process.env.APPLE_URL,
  APPLE_SUBSCRIPTION_PASSWORD:process.env.APPLE_SUBSCRIPTION_PASSWORD,
  GOOGLE_PLAY_STORE_URL:process.env.GOOGLE_PLAY_STORE_URL,
  ANDRIOD_PACKAGENAME:process.env.PACKAGENAME,
  API_KEY:process.env.API_KEY,
});
