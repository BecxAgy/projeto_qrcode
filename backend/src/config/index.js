export { default as swaggerConfig } from "./swagger.config.js";
import { config } from "dotenv";
config();

//NOTE: If you are running the project in an instance, you should store these secret keys in its configuration settings.
// This type of storing secret information is only experimental and for the purpose of local running.

const {
  DB_HOST,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  PORT,
  JWT_SECRET_KEY,
  JWT_REFRESH_SECRET_KEY,
} = process.env;

export const port = PORT || 3005;
export const db_host = DB_HOST;
export const db_name = DB_NAME;
export const db_user = DB_USER;
export const db_password = DB_PASSWORD;
export const jwtSecretKey = JWT_SECRET_KEY;
export const jwtRefreshSecretKey = JWT_REFRESH_SECRET_KEY;
export const prefix = "/api";
export const specs = "/docs";
