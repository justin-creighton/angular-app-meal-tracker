import { Component, OnInit } from '@angular/core';
import { IngredientsService } from '../services/ingredients.service';
import { MealsService } from '../services/meals.service';
import { Meal, Ingredient, Recipe } from '../types/types';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  isLoadingMeals = true;
  meals: Meal[] = [];

  isLoadingIngredients = true;
  ingredients: Ingredient[] = [];

  constructor(
    private ingredientsService: IngredientsService,
    private mealsService: MealsService,
  ) {}

  ngOnInit() {
    this.mealsService.getMeals().subscribe((meals) => {
      this.meals = meals;
      this.isLoadingMeals = false;
    });

    this.mealsService.getIngredients().subscribe((ingredients) => {
      this.ingredients = ingredients;
      this.isLoadingIngredients = false;
    });
  }

  onDeleteMeal(mealId: string) {
    this.mealsService.deleteMeal(mealId).subscribe((updatedMeals) => {
      this.meals = updatedMeals;
    });
  }

  onDeleteIngredient(mealId: string) {
    this.mealsService
      .deleteIngredient(ingredientId)
      .subscribe((updatedIngredient) => {
        this.ingredients = updatedIngredient;
      });
  }
}
