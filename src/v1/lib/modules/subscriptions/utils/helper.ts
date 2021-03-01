/* eslint-disable max-len */
import { createTransport } from 'nodemailer';

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
    return this.createTransporter().sendMail(options);
  },
};

export default SubscriptionHelper;
