/* eslint-disable max-len */
module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert(
      'Questions',
      [
        {
          userId: 1,
          title: 'Et voluptas voluptates debitis unde aut quidem et ut odio.',
          body:
            'Adipisci rerum quaerat dolor vitae nisi. Quia autem harum dolor velit. Consequatur vitae sunt.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          title: 'Voluptatibus labore sapiente et et in.',
          body:
            'Eius natus corporis sed non voluptas mollitia in doloremque cum. Perferendis sapiente commodi laudantium perferendis soluta nesciunt animi possimus. Quia tempora quibusdam.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          userId: 3,
          title: 'Sed non minus.',
          body:
            'Voluptas labore corrupti et odio error rerum laborum esse aut. Quia voluptatem animi reprehenderit soluta voluptatum non omnis. Optio ab ut qui voluptate animi rerum molestias. Eveniet aperiam modi nostrum aliquid voluptas eius.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          userId: 4,
          title: 'Cupiditate et omnis.',
          body:
            'Ex et rerum corporis cum sunt minima inventore maxime rerum. Quisquam enim ut totam necessitatibus id aperiam rerum. Cum perferendis eaque est qui unde aspernatur voluptatem accusantium necessitatibus.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          userId: 5,
          title: 'Facilis itaque quisquam aut praesentium.',
          body:
            'Non a consectetur exercitationem alias nihil dolores est beatae. Placeat incidunt distinctio velit. Laboriosam numquam et facilis. Veniam quisquam exercitationem earum et. Eum natus omnis eos minima cum eum eos. Quia nihil qui reiciendis enim.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],

      {},
    ),

  down: (queryInterface) => queryInterface.bulkDelete('Questions', null, {}),
};
