import Subscription from '../../../../../../database/models/subscription';

class SubscriptionRepository {
  public static async create(data: {
    questionId: number;
    userId: number;
    email: string;
  }) {
    try {
      return await Subscription.create(data);
    } catch (e) {
      return e;
    }
  }

  public static async getSubscribers(data: { questionId: number }) {
    try {
      return await Subscription.findAll({ where: data });
    } catch (e) {
      return e;
    }
  }
}
export default SubscriptionRepository;
