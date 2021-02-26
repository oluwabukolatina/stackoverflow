import bcrypt from 'bcrypt';

const jwtHelper = {
  hashPassword(password: string) {
    return bcrypt.hashSync(password, 10);
  },
};

export default jwtHelper;
