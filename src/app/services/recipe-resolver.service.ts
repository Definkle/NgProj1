// import { Injectable } from '@angular/core';
// import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { Ingredient } from '../shared/ingredient.model';
// import { RecipeService } from './recipe.service';
// import { Observable } from 'rxjs';

// interface Recipe {
//   name: string;
//   desc: string;
//   imagePath: string;
//   ingredients: Ingredient[];
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class RecipeResolverService implements Resolve<{ name: string, desc: string, imagePath: string, ingredients: Ingredient[] }> {

//   constructor(private recipeService: RecipeService) { }

//   resolve(route: ActivatedRouteSnapshot, status: RouterStateSnapshot): Observable<Recipe> | Promise<Recipe> | Recipe {
//     return this.recipeService.getRecipe(route.params['recipe']);
//   }
// }
