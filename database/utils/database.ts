import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';

dotenv.config();
const sequelize = new Sequelize(
  process.env.ENV ? String(process.env.DB_NAME) : String(process.env.PROD_DB),
  process.env.ENV
    ? String(process.env.DB_USER)
    : String(process.env.PROD_DB_USER),
  process.env.ENV ? process.env.DB_PASSWORD : process.env.PROD_DB_PASSWORD,
  { host: process.env.DB_HOST, dialect: 'mysql' },
);
export default sequelize;
