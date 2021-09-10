const db = require('../data/db-config')

async function getRecipeById(recipe_id){
return await db('recipes as r')
.leftJoin('recipe_steps as rs', 'rs.recipe_id', 'r.recipe_id')
.leftJoin('ingredient_quantities as iq', 'rs.step_id', 'iq.step_id')
.leftJoin('step_ingredients as si', 'si.ingredient_id', 'iq.ingredient_id')
.select('r.*','si.*','iq.*','rs.*')
.where('r.recipe_id', recipe_id)
}

module.exports = {getRecipeById}