import Dummy from '../../../../../database/models/dummy';

class DummyRepository {
  public static async create(data: { title: string; body: string }) {
    try {
      return await Dummy.create(data);
    } catch (e) {
      return e;
    }
  }
}
export default DummyRepository;
