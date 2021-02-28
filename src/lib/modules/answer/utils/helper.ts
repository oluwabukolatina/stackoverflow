import QuestionRepository from '../../question/repository/question.repository';

const QuestionHelper = {
  async findQuestion(data: { id: number }) {
    try {
      return await QuestionRepository.findQuestion(data);
    } catch (e) {
      return e;
    }
  },
};

export default QuestionHelper;
