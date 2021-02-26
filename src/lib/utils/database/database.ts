import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('stack', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});
export default sequelize;
