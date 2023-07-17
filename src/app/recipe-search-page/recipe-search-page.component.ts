import { Component } from '@angular/core';
import { IngredientsService } from '../services/ingredients.service';
import { RecipesService } from '../services/recipes.service';
import { Ingredient, Recipe } from '../types/types';

@Component({
  selector: 'app-recipe-search-page',
  templateUrl: './recipe-search-page.component.html',
  styleUrls: ['./recipe-search-page.component.scss'],
})
export class RecipeSearchPageComponent {
  searchValue: any = '';
  ingredients: Ingredient[] = [];
  searchResults: Recipe[] = [];

  constructor(
    private ingredientsService: IngredientsService,
    private recipesService: RecipesService,
  ) {}

  onSearchClicked() {
    this.recipesService
      .getSearchResults(this.searchValue)
      .subscribe((searchResults) => (this.searchResults = searchResults));
  }
}
