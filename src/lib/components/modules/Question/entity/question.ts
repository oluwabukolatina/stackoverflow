import { DataTypes } from 'sequelize';
import { UserModelStatic } from '../interface/user-types';
import sequelize from '../../../../utils/database/database';

const UserModel = <UserModelStatic>sequelize.define('User', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
  },
  email: { type: DataTypes.STRING },
});
export default UserModel;
