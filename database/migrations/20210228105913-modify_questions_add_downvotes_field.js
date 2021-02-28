module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Questions', 'downvotes', {
      type: Sequelize.INTEGER,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.removeColumn('Questions', 'downvotes');
  },
};
