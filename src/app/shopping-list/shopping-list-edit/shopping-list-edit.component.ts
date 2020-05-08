import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "src/app/services/shopping-list.service";
import { Subscription } from "rxjs";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-shopping-list-edit",
  templateUrl: "./shopping-list-edit.component.html",
  styleUrls: ["./shopping-list-edit.component.css"],
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild("f", { static: false }) slForm: NgForm;
  paramsSubscription: Subscription;
  editMode = false;
  selectedItem: number;
  selectedIngredient: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.paramsSubscription = this.shoppingListService.selectedIngredient.subscribe(
      (index: number) => {
        this.editMode = true;
        this.selectedItem = index;
        this.selectedIngredient = this.shoppingListService.getIngredient(index);
        this.slForm.setValue({
          name: this.selectedIngredient.name,
          amount: this.selectedIngredient.amount,
        });
      }
    );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(
        this.selectedItem,
        newIngredient
      );
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  clearForm() {
    this.selectedIngredient = null;
    this.selectedItem = null;
    this.editMode = false;
    this.slForm.reset();
  }

  deleteIngredient() {
    this.clearForm();
    this.shoppingListService.deleteIngredient(this.selectedItem);
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
