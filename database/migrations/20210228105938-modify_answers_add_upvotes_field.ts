module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Answers', 'upvotes', {

      type: Sequelize.INTEGER,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.removeColumn('Answers', 'upvotes');
  },
};
