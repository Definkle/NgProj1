import { Injectable, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      "Dog",
      "This is just a test",
      "https://cdn.pixabay.com/photo/2016/01/05/17/51/dog-1123016_960_720.jpg",
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries',20)
      ]
    ),
    new Recipe(
      "A Test Recipe",
      "This is just a test",
      "https://cdn.pixabay.com/photo/2016/01/05/17/51/dog-1123016_960_720.jpg",
      [
        new Ingredient('Meat', 2),
        new Ingredient('Cheese',4)
      ]
    )
  ];
  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredients(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
