import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingredient } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class IngredientsService {
  constructor(private http: HttpClient) {}

  getIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>('/api/ingredients');
  }

  addIngredient(
    name: string,
    amount: number,
    units: string,
  ): Observable<Ingredient[]> {
    const newIngredient = {
      name: name.toLowerCase(),
      amount: amount,
      units: units,
    };
    return this.http.post<Ingredient[]>(`/api/ingredients`, newIngredient);
  }

  deleteIngredient(name: string): Observable<Ingredient[]> {
    return this.http.delete<Ingredient[]>(`/api/ingredients/${name}`);
  }
}
