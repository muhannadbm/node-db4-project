
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_steps').insert([
        {step_id: 1, step_number: 1 , step_instruction: 'instruction 1-1', recipe_id: '1'},
        {step_id: 2, step_number: 2 , step_instruction: 'instruction 1-2', recipe_id: '1'},
        {step_id: 3, step_number: 3 , step_instruction: 'instruction 1-3', recipe_id: '1'},
        {step_id: 4, step_number: 1 , step_instruction: 'instruction 2-1', recipe_id: '2'},
        {step_id: 5, step_number: 2 , step_instruction: 'instruction 2-2', recipe_id: '2'},
        {step_id: 6, step_number: 3 , step_instruction: 'instruction 2-3', recipe_id: '2'},
        {step_id: 7, step_number: 1 , step_instruction: 'instruction 3-1', recipe_id: '3'},
        {step_id: 8, step_number: 2 , step_instruction: 'instruction 3-2', recipe_id: '3'},
        {step_id: 9, step_number: 3 , step_instruction: 'instruction 3-3', recipe_id: '3'},
      ]);
    });
};
