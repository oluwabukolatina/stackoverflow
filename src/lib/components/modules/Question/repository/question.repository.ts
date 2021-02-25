import UserModel from '../entity/question';

class QuestionRepository {
  public static async get() {
    try {
      return await UserModel.findAll();
    } catch (e) {
      return e;
    }
  }
}
export default QuestionRepository;
