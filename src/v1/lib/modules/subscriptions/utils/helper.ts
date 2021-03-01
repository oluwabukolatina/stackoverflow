/* eslint-disable max-len */
import { createTransport } from 'nodemailer';
import QuestionHelper from '../../answer/utils/helper';
import SubscriptionRepository from '../repository/subscription.repository';
import Helper from '../../../utils/helpers/helper';

const SubscriptionHelper = {
  /**
   * requires a gmail account credentials and needs the allow less secure app option to be turned on for it to actually deliver the email
   */
  createTransporter() {
    return createTransport({
      port: 465,
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD,
      },
    });
  },
  sendEmailToUser(options: any) {
    this.createTransporter().sendMail(options);
  },
  async sendEmailToSubscribers(id: number) {
    const question = await QuestionHelper.findQuestion({ id });
    const subscribers = await SubscriptionRepository.getSubscribers({
      questionId: id,
    });
    const options = await Helper.sendNewAnswerNotification(
      question.title,
      subscribers,
    );
    this.createTransporter().sendMail(options);
  },
};

export default SubscriptionHelper;
