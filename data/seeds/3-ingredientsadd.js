
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('step_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('step_ingredients').insert([
        {ingredient_id: 1, ingredient_name: 'Onion2'},
        {ingredient_id: 2, ingredient_name: 'Pickles2'},
        {ingredient_id: 3, ingredient_name: 'Garlic3'},
        {ingredient_id: 4, ingredient_name: 'Watermelon4'},
        {ingredient_id: 5, ingredient_name: 'Banana5'},
        {ingredient_id: 6, ingredient_name: 'Sauce6'},
        {ingredient_id: 7, ingredient_name: 'Watermelon7'},
        {ingredient_id: 8, ingredient_name: 'Banana8'},
        {ingredient_id: 9, ingredient_name: 'Sauce9'},
      ]);
    });
};
