import { Subject } from 'rxjs/Subject';
import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Kerroshamppari',
      'Maukas kerroshamppari',
      'https://d36wnpk9e3wo84.cloudfront.net/menu-item-images/800/web-butter-burger-cheese-double.jpg',
      [
        new Ingredient('Sämpylät', 2),
        new Ingredient('Pihvi', 2),
        new Ingredient('Juusto', 2),
        new Ingredient('Salaatti', 1),
        new Ingredient('Ketsuppi', 1),
      ]),
    new Recipe('Hodari',
      'Nami hodari',
      'https://blogcontagiros.files.wordpress.com/2011/05/hot_dog_w_mustard2.jpg',
      [
        new Ingredient('Sämpylä', 1),
        new Ingredient('Nakki', 1),
        new Ingredient('Sinappi', 1),
        new Ingredient('kurkkusalaatti', 1),
      ]),
    new Recipe('Pizza',
      'Jee pizzaa',
      'https://mob.kotipizza.fi/kuvat/tuotteet/pizza-pepperoni-600x600.png',
      [
        new Ingredient('Pohja', 1),
        new Ingredient('Tomaattikastike', 1),
        new Ingredient('Pepperonisiivu', 10),
        new Ingredient('Ananaspalat (prk)', 1),
        new Ingredient('Juustoraaste (g)', 100),
        new Ingredient('Tonnikala', 1),
        new Ingredient('Kinkku (g)', 50),
      ])
  ];

  constructor() {}

  getRecipes() {
    //  Return a COPY of the recipes-array.
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
}
