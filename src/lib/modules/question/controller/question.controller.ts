import { Request, Response } from 'express';
import QuestionRepository from '../repository/question.repository';
import ResponseHandler from '../../../utils/response-handlers/ResponseHandler';

class QuestionController {
  public createQuestion = async (req: Request, response: Response) => {
    const { title, body } = req.body;
    const data = { title, body };
    try {
      const question = await QuestionRepository.askQuestion(data);
      return ResponseHandler.SuccessResponse(
        response,
        201,
        true,
        'Created Question',
        { question },
      );
    } catch (err) {
      return ResponseHandler.ServerErrorResponse(response);
    }
  };
}
export default QuestionController;
