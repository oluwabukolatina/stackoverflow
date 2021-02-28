// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert(
      'Users',
      [
        {
          email: 'Jaylon80@hotmail.com',
          password: await bcrypt.hash('password', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'Forrest65@gmail.com',
          password: await bcrypt.hash('password', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'Muriel92@hotmail.com',
          password: await bcrypt.hash('password', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    ),

  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
