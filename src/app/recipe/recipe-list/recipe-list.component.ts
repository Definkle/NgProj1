import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      "Dog",
      "This is just a test",
      "https://cdn.pixabay.com/photo/2016/01/05/17/51/dog-1123016_960_720.jpg"
    ),
    new Recipe(
      "A Test Recipe",
      "This is just a test",
      "https://cdn.pixabay.com/photo/2016/01/05/17/51/dog-1123016_960_720.jpg"
    )
  ];
  constructor() {}

  ngOnInit(): void { }
  
  onSelect(recipe: Recipe) {
    
    this.recipeWasSelected.emit(recipe);
  }
}
