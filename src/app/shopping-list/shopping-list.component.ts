import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../services/shopping-list.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  private paramsSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.paramsSubscription = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  onSelect(index: number) {
    this.shoppingListService.selectedIngredient.next(index);
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
