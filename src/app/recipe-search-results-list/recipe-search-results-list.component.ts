import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MealsService } from '../services/meals.service';
import { Ingredient, Recipe } from '../types/types';

@Component({
  selector: 'app-recipe-search-results-list',
  templateUrl: './recipe-search-results-list.component.html',
  styleUrls: ['./recipe-search-results-list.component.scss'],
})
export class RecipeSearchResultsListComponent implements OnInit {
  @Input() recipes: Recipe[] = [];
  @Input() ingredients: Ingredient[] = [];

  selectedDate: string = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mealsService: MealsService,
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(
      (params: any) => (this.selectedDate = params.date),
    );
  }

  addMealWithRecipe(recipeId: string) {
    this.mealsService.addMeal(this.selectedDate, recipeId).subscribe(() => {
      alert('Successfully added recipe!');
      return this.router.navigateByUrl('/');
    });
  }

  getMissingIngredients(recipe: Recipe): Ingredient[] {
    return recipe.ingredients.filter(
      (recipeIngredient) =>
        !this.ingredients.some(
          (ingredient) => ingredient.name === recipeIngredient.name,
        ),
    );
  }
}
