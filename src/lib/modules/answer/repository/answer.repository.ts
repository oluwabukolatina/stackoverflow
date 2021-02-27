import Answer from '../../../../../database/models/answer';

class AnswerRepository {
  public static async create(data: {
    questionId: number;
    answer: string;
    userId: number;
  }) {
    try {
      return await Answer.create(data);
    } catch (e) {
      return e;
    }
  }
}
export default AnswerRepository;
