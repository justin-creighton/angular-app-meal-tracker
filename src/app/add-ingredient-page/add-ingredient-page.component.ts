import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IngredientsService } from '../services/ingredients.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-ingredient-page',
  templateUrl: './add-ingredient-page.component.html',
  styleUrls: ['./add-ingredient-page.component.scss'],
})
export class AddIngredientPageComponent {
  name: string = '';
  amount: string = '';
  units: string = '';
  unitOptions: Array<string> = [
    'pounds',
    'cups',
    'tablespoons',
    'teaspoons',
    'count',
  ];

  constructor(
    private router: Router,
    private location: Location,
    private ingredientsService: IngredientsService,
  ) {}

  back() {
    this.location.back();
  }
  addToIngredients() {
    this.ingredientsService
      .addIngredient(this.name, Number(this.amount), this.units)
      .subscribe(() => {
        alert('Successfully added ingredient');
        return this.router.navigateByUrl('/');
      });
  }
}
