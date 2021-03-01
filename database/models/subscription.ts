import { DataTypes } from 'sequelize';
import sequelize from '../utils/database';
import { SubscriptionInstance } from '../../src/v1/lib/modules/subscriptions/types/subscription-types';

const Subscription = sequelize.define<SubscriptionInstance>(
  'Subscription',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
    },
    questionId: {
      type: DataTypes.INTEGER,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
  },
  {},
);

export default Subscription;
