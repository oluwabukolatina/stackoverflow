import User from '../../../../../../database/models/user';

class UserRepository {
  public static async getUser(data: { email: string }) {
    try {
      return await User.findOne({ where: data });
    } catch (e) {
      return e;
    }
  }
}
export default UserRepository;
