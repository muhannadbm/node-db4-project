const express = require('express')
const router = express.Router()
const Recipe = require('../api/recipe_model')

router.get('/:id', async (req,res)=>{
let id = req.params.id
let recipe = await Recipe.getRecipeById(id)
let stepsarr = []

recipe.forEach((element,index) => {

    stepsarr.push({
        step_id: element.step_id,
        step_number: element.step_number,
        step_instruction: element.step_instruction,
        ingredients: recipe.map(el=>{
            if(el.ingredient_id){
                if(el.step_id === element.step_id){
                    return {"ingredient_id": el.ingredient_id, "ingredient_name": el.ingredient_name,
                     "quantity": el.quantity_amount}
                }
            }
        })
    })
  let temparr = stepsarr[index].ingredients.filter(el=> el!= null)
  stepsarr[index].ingredients = temparr

});
let updatedarr = stepsarr.filter((v,i,a)=>a.findIndex(t=>(t.step_id === v.step_id))===i)
let myobj = {
    "recipe_id": recipe[0].recipe_id,
    "recipe_name": recipe[0].name,
    "created_at": recipe[0].created_at,
    "steps": updatedarr
}
res.json(myobj)
})

module.exports = {router}