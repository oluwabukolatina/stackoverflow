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
}
export default SubscriptionRepository;
