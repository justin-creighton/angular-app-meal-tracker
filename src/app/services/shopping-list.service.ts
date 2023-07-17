import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  constructor(private http: HttpClient) {}

  getShoppingListItems(): Observable<string[]> {
    return this.http.get<string[]>('/api/shopping-list');
  }
}
