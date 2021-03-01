module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Questions', 'upvotes', {
      type: Sequelize.INTEGER,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.removeColumn('Questions', 'upvotes');
  },
};
