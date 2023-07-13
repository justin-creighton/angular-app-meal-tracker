import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Meal } from '../types/types';

const datesAreTheSame = (date1: Date, date2: Date) =>
  date1.getFullYear() === date2.getFullYear() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getDate() === date2.getDate();

@Component({
  selector: 'app-meals-list',
  templateUrl: './meals-list.component.html',
  styleUrls: ['./meals-list.component.scss'],
})
export class MealsListComponent implements OnInit {
  @Input() isLoading: boolean = true;
  private _meals: Meal[] = [];
  @Input() set meals(value: Meal[]) {
    this._meals = value;
    this.mealsForDays = this.nextSevenDays.map((day) =>
      this.meals.find((meal) => datesAreTheSame(meal.plannedDate, day)),
    );
  }
  @Output() deleteMeal = new EventEmitter<string>();

  nextSevenDays: Date[] = Array(7)
    .fill(null)
    .map((_, i) => {
      const date = new Date();
      date.setDate(date.getDate() + i);
      return date;
    });

  mealsForDays: (Meal | undefined)[] = [];

  constructor() {}

  get meals() {
    return this._meals;
  }

  ngOnInit() {}

  onDelete(mealId: string) {
    this.deleteMeal.emit(mealId);
  }
}
