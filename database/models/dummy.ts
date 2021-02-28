import { DataTypes } from 'sequelize';
import sequelize from '../utils/database';
import { DummyInstance } from '../../src/lib/modules/dummy/types/dummy-types';

const Dummy = sequelize.define<DummyInstance>(
  'Dummy',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  {},
);

export default Dummy;
