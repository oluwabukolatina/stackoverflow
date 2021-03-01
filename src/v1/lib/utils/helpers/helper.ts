/* eslint-disable max-len */
const Helper = {
  createSubscriptionNotification(email: string) {
    return {
      subject: 'You have been subscribed',
      from: `Tina Oluwabukola ${process.env.GMAIL_USERNAME}`,
      html: `<p>Hi there,
<p>This is just to let you know you have chosen to be subscribed to this question and will get an email if it receives a answer</p>
    <h3>Tina</h3>`,
      to: email,
    };
  },
};
export default Helper;
