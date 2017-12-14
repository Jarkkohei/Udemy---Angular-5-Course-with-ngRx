import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  shoppingListState: Observable<{Ingredients: Ingredient[]}>;

  private subscription: Subscription;

  constructor(
    private slService: ShoppingListService,
    private store: Store<{shoppingList: {Ingredients: Ingredient[]}}>) {}

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
    //this.subscription = this.slService.ingredientsChanged
    //  .subscribe(
    //    (ingredients: Ingredient[]) => {
    //      this.ingredients = ingredients;
    //    }
    //  );
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
