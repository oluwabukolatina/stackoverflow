import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('stack2', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});
export default sequelize;
