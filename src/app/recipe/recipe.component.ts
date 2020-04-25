import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from '../services/recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [RecipeService]
})
export class RecipeComponent implements OnInit {
  recipe: Recipe;
  paramsSubscription: Subscription;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.paramsSubscription = this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.recipe = recipe
      }
    );
  }
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
