
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_id: 1, name: 'recipe1'},
        {recipe_id: 2, name: 'recipe2'},
        {recipe_id: 3, name: 'recipe3'}
      ]);
    });
};
