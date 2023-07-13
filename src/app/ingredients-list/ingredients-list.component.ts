import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../types/types';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.scss'],
})
export class IngredientsListComponent implements OnInit {
  @Input() isLoading: boolean = true;
  @Input() ingredients: Ingredient[] = [];

  @Output() deleteIngredient = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  onDelete(ingredientName: string) {
    this.deleteIngredient.emit(ingredientName);
  }
}
