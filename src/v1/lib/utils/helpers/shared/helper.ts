import UserRepository from '../../../modules/user/repository/user.repository';

const UserHelper = {
  /**
   * helper to get a user as it is used in a couple otther places
   * @param data (mostly just email)
   */
  async getUser(data: { email: string }) {
    try {
      return await UserRepository.getUser(data);
    } catch (e) {
      return e;
    }
  },
};
export default UserHelper;
