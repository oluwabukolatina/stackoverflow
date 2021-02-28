import AuthHelper from '../../src/lib/modules/auth/utils/helper';

module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert(
      'Users',
      [
        {
          email: 'Jaylon80@hotmail.com',
          password: AuthHelper.hashPassword('password'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'Forrest65@gmail.com',
          password: AuthHelper.hashPassword('password'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'Jabari.Sipes10@gmail.com',
          password: AuthHelper.hashPassword('password'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          email: 'Addie.Macejkovic79@gmail.com',
          password: AuthHelper.hashPassword('password'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'Carmela_Parker@hotmail.com',
          password: AuthHelper.hashPassword('password'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'Muriel92@hotmail.com',
          password: AuthHelper.hashPassword('password'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    ),

  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
