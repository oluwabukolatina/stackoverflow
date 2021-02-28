import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';

dotenv.config();
const sequelize = new Sequelize(
  String(process.env.DB_NAME),
  String(process.env.DB_USER),
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  },
);
export default sequelize;
