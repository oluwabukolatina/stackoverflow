import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const AuthHelper = {
  createToken(id: number, email: string) {
    return jwt.sign({ id, email }, String(process.env.JWT_SECRET), {
      expiresIn: 720000,
    });
  },
  async hashPassword(password: string) {
    return bcrypt.hash(password, 10);
  },
  async comparePassword(password: string, hashed: string) {
    return bcrypt.compare(password, hashed);
  },
};

export default AuthHelper;
