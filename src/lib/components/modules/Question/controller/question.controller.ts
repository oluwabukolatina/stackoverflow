import { Request, Response } from 'express';

class QuestionController {
  public createQuestion = async ({ body }: Request, res: Response) => {
    console.log(body);
  };
}
export default QuestionController;
