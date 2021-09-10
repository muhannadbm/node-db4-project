
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredient_quantities').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient_quantities').insert([
        {quantity_id: 1, ingredient_id: 1, step_id: 2, quantity_amount: 0.12},
        {quantity_id: 2, ingredient_id: 2, step_id: 2, quantity_amount: 0.13},
        {quantity_id: 3, ingredient_id: 3, step_id: 3, quantity_amount: 0.14},
        {quantity_id: 4, ingredient_id: 4, step_id: 4, quantity_amount: 0.15},
        {quantity_id: 5, ingredient_id: 5, step_id: 5, quantity_amount: 0.16},
        {quantity_id: 6, ingredient_id: 6, step_id: 6, quantity_amount: 0.17},
        {quantity_id: 7, ingredient_id: 7, step_id: 7, quantity_amount: 0.18},
        {quantity_id: 8, ingredient_id: 8, step_id: 8, quantity_amount: 0.19},
        {quantity_id: 9, ingredient_id: 9, step_id: 9, quantity_amount: 0.20}
      ]);
    });
};
