import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Meal, MealRaw } from '../types/types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MealsService {
  constructor(private http: HttpClient) {}

  formatMealDate(rawMeal: MealRaw): Meal {
    return {
      ...rawMeal,
      plannedDate: new Date(rawMeal.plannedDate),
    };
  }

  getMeals(): Observable<Meal[]> {
    return this.http
      .get<MealRaw[]>('api/meals/')
      .pipe(
        map((rawMeals) =>
          rawMeals.map((rawMeal) => this.formatMealDate(rawMeal)),
        ),
      );
  }

  deleteMeal(id: string): Observable<Meal[]> {
    return this.http
      .delete<MealRaw[]>(`api/meals/${id}`)
      .pipe(
        map((rawMeals) =>
          rawMeals.map((rawMeal) => this.formatMealDate(rawMeal)),
        ),
      );
  }
}
