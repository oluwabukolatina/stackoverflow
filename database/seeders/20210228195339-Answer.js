/* eslint-disable max-len */
module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert(
      'Answers',
      [
        {
          userId: 1,
          questionId: 2,
          answer:
            'Qui natus minus magnam quas consectetur. Non et laboriosam quia rerum id corrupti.',

          createdAt: new Date(),
          updatedAt: new Date(),
          downvotes: 0,
          upvotes: 0,
        },

        {
          userId: 3,
          questionId: 4,
          answer:
            'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum',
          createdAt: new Date(),
          updatedAt: new Date(),
          downvotes: 0,
          upvotes: 0,
        },

        {
          userId: 2,
          questionId: 1,
          answer:
            'Sit sed ducimus commodi ea voluptatem voluptates. Est modi quae ab saepe exercitationem sint et. Ut dicta dicta doloremque fuga cupiditate.',
          createdAt: new Date(),
          updatedAt: new Date(),
          downvotes: 0,
          upvotes: 0,
        },
        {
          userId: 2,
          questionId: 2,
          answer:
            'Molestiae voluptas aut consequatur rerum. Labore quibusdam eos sequi quibusdam soluta ex ad. Sit libero excepturi quo ducimus blanditiis sit. Magnam reprehenderit soluta quisquam facere .',
          createdAt: new Date(),
          updatedAt: new Date(),
          downvotes: 0,
          upvotes: 0,
        },

        {
          userId: 3,
          questionId: 2,
          answer:
            'Inventore eveniet sit eos illum ad illum. Recusandae maxime atque quia quia praesentium sit quis. Ipsum error quae est nisi hic cum. Consequatur dolores qui non cumque et voluptas cum ut aliquid. Expedita quo et id rem.',
          createdAt: new Date(),
          updatedAt: new Date(),
          downvotes: 0,
          upvotes: 0,
        },
      ],
      {},
    ),

  down: (queryInterface) => queryInterface.bulkDelete('Answers', null, {}),
};
