import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list-page',
  templateUrl: './shopping-list-page.component.html',
  styleUrls: ['./shopping-list-page.component.scss'],
})
export class ShoppingListPageComponent implements OnInit {
  isLoading: boolean = true;
  shoppingListItems: string[] = [];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.shoppingListService
      .getShoppingListItems()
      .subscribe((items: string[]) => {
        this.shoppingListItems = items;
        this.isLoading = false;
      });
  }
}
