module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Answers', 'downvotes', {
      type: Sequelize.INTEGER,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.removeColumn('Answers', 'downvotes');
  },
};
