import bcrypt from 'bcrypt';
import QuestionRepository from '../../question/repository/question.repository';

const QuestionHelper = {
  async findQuestion(data: { id: number }) {
    try {
      return await QuestionRepository.findQuestion(data);
    } catch (e) {
      return e;
    }
  },
  async hashPassword(password: string) {
    return bcrypt.hash(password, 10);
  },
  async comparePassword(password: string, hashed: string) {
    return bcrypt.compare(password, hashed);
  },
};

export default QuestionHelper;
