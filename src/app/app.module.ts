import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddIngredientPageComponent } from './add-ingredient-page/add-ingredient-page.component';
import { RecipeSearchPageComponent } from './recipe-search-page/recipe-search-page.component';
import { ShoppingListPageComponent } from './shopping-list-page/shopping-list-page.component';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MealsListComponent } from './meals-list/meals-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddIngredientPageComponent,
    RecipeSearchPageComponent,
    ShoppingListPageComponent,
    IngredientsListComponent,
    HomePageComponent,
    MealsListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
