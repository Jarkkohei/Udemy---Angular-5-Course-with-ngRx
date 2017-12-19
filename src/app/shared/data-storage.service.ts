import { AuthService } from './../auth/auth.service';
import 'rxjs/Rx';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {

  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {}

  storeRecipes() {
    //const headers = new HttpHeaders().set('Authorization', 'Bearer lfdkjfldkjfld'));

    //return this.httpClient.put('https://angular-recipe-book-43294.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
    //  observe: 'body',
    //  params: new HttpParams().set('auth', token);
    //  //headers: headers
    //});
    const req = new HttpRequest('PUT', 'https://angular-recipe-book-43294.firebaseio.com/recipes.json', 
      this.recipeService.getRecipes(), 
      {reportProgress: true});

    return this.httpClient.request(req);
  }

  getRecipes() {

    //this.httpClient.get<Recipe[]>('https://angular-recipe-book-43294.firebaseio.com/recipes.json?auth=' + token)
    this.httpClient.get<Recipe[]>('https://angular-recipe-book-43294.firebaseio.com/recipes.json', {
      observe: 'body',
      responseType: 'json'
    })
      .map(
        (recipes) => {
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}



