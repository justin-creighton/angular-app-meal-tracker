import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeSearchPageComponent } from './recipe-search-page/recipe-search-page.component';
import { ShoppingListPageComponent } from './shopping-list-page/shopping-list-page.component';
import { AddIngredientPageComponent } from './add-ingredient-page/add-ingredient-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: 'recipes',
    component: RecipeSearchPageComponent,
  },
  {
    path: '',
    component: HomePageComponent,
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
