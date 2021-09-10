
exports.up = async function(knex) {
    await knex.schema
    .createTable('recipes', table => {
      table.increments('recipe_id')
      table.string('name').unique().notNullable()
      table.timestamps(true,true)
    })
  .createTable('recipe_steps', table => {
      table.increments('step_id')
      table.integer('step_number').unsigned().notNullable()
      table.string('step_instruction')
      table.integer('recipe_id')
      .references('recipe_id')
      .inTable('recipes')
      .onDelete('restrict')
      .onUpdate('restrict')
  })
  .createTable('step_ingredients', table => {
    table.increments('ingredient_id')
    table.string('ingredient_name')

})
  .createTable('ingredient_quantities', table => {
    table.increments('quantity_id')
    table.integer('ingredient_id')
    .references('ingredient_id')
    .inTable('step_ingredients')
    .onDelete('restrict')
    .onUpdate('restrict')
    table.integer('step_id')
    .references('step_id')
    .inTable('recipe_steps')
    .onDelete('restrict')
    .onUpdate('restrict')
    table.float('quantity_amount').notNullable();
})
  
  
  };
  
  exports.down = async function(knex) {
      await knex.schema
      .dropTableIfExists('ingredient_quantities')
      .dropTableIfExists('step_ingredients')
      .dropTableIfExists('recipe_steps')
      .dropTableIfExists('recipes')







  };
  