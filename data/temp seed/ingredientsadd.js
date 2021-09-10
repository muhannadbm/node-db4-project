
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('step_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('step_ingredients').insert([
        {ingredient_id: 1, ingredient_name: 'Onion2', step_id: 2},
        {ingredient_id: 2, ingredient_name: 'Pickles2', step_id: 2},
        {ingredient_id: 3, ingredient_name: 'Garlic3', step_id: 3},
        {ingredient_id: 4, ingredient_name: 'Watermelon4', step_id: 4},
        {ingredient_id: 5, ingredient_name: 'Banana5', step_id: 5},
        {ingredient_id: 6, ingredient_name: 'Sauce6', step_id: 6},
        {ingredient_id: 4, ingredient_name: 'Watermelon7', step_id: 7},
        {ingredient_id: 5, ingredient_name: 'Banana8', step_id: 8},
        {ingredient_id: 6, ingredient_name: 'Sauce9', step_id: 9},
      ]);
    });
};
