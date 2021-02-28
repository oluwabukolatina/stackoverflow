import User from '../../../../../../database/models/user';

class AuthRepository {
  public static async register(data: { password: string; email: string }) {
    try {
      return await User.create(data);
    } catch (e) {
      return e;
    }
  }
}
export default AuthRepository;
