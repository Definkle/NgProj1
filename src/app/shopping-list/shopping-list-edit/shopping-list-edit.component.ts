import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  paramsSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.paramsSubscription = this.shoppingListService.selectedIngredient
      .subscribe(
        (ingredient: Ingredient) => {
          this.nameInputRef.nativeElement.value = ingredient.name
          this.amountInputRef.nativeElement.value = ingredient.amount
        }
      );
  }
  
  addIngredient() {
    const ingredient = new Ingredient(
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value
    );
    this.shoppingListService.addIngredient(ingredient);
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
