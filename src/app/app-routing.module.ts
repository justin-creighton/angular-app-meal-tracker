import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeSearchPageComponent } from './recipe-search-page/recipe-search-page.component';
import { HomeComponent } from './home/home.component';
import { ShoppingListPageComponent } from './shopping-list-page/shopping-list-page.component';
import { AddIngredientPageComponent } from './add-ingredient-page/add-ingredient-page.component';

const test = {};
const meme = { test };
const routes: Routes = [
  {
    path: 'recipe',
    component: RecipeSearchPageComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'shopping-list',
    component: ShoppingListPageComponent,
  },
  {
    path: 'add-ingredient',
    component: AddIngredientPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
