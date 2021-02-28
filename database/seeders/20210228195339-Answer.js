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
            'Qui natus minus magnam quas consectetur. Non et laboriosam quia rerum id corrupti. Est aliquid qui at consequatur aut.',

          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          userId: 3,
          questionId: 4,
          answer:
            'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          userId: 2,
          questionId: 1,
          answer:
            'Sit sed ducimus commodi ea voluptatem voluptates. Est modi quae ab saepe exercitationem sint et. Ut dicta dicta doloremque fuga cupiditate. Eveniet numquam et in fuga saepe minima et.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          questionId: 2,
          answer:
            'Molestiae voluptas aut consequatur rerum. Labore quibusdam eos sequi quibusdam soluta ex ad. Sit libero excepturi quo ducimus blanditiis sit. Magnam reprehenderit soluta quisquam facere earum autem sint et. Voluptatum et ea optio aut.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          userId: 3,
          questionId: 2,
          answer:
            'Inventore eveniet sit eos illum ad illum. Recusandae maxime atque quia quia praesentium sit quis. Ipsum error quae est nisi hic cum. Consequatur dolores qui non cumque et voluptas cum ut aliquid. Expedita quo et id rem. Ipsam vel nostrum et quibusdam quis dolor deserunt veniam nihil.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    ),

  down: (queryInterface) => queryInterface.bulkDelete('Answers', null, {}),
};
