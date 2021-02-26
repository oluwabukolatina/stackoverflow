import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const jwtHelper = {
  createToken(id: number) {
    return jwt.sign({ userId: id }, String(process.env.JWT_SECRET), {
      expiresIn: '3600000',
    });
  },
  hashPassword(password: string) {
    return bcrypt.hashSync(password, 10);
  },
};

export default jwtHelper;
