import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, tap } from "rxjs/operators";
import { RecipeService } from "./recipe.service";
import { Recipe } from "../recipe/recipe.model";

@Injectable({
  providedIn: "root",
})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  getRecipes() {
    return this.http
      .get<Recipe[]>("https://ng-proj1-5e76e.firebaseio.com/recipes.json")
      .pipe(
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((recipes) => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put("https://ng-proj1-5e76e.firebaseio.com/recipes.json", recipes)
      .subscribe((response) => {});
  }
}
