// import { Component, OnInit, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipe: Recipe;
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
  }

  onAddToShoppingList () {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

}
















// Project Cleanup
// There's one thing I forgot to clean up here (will be cleaned up later in the course). Feel free to do the cleanup right now though.

// Our app.component.html file looks like that:

// <app-header (featureSelected)="onNavigate($event)"></app-header>
// <div class="container">
//   <div class="row">
//     <div class="col-md-12">
//       <router-outlet></router-outlet>
//     </div>
//   </div>
// </div>
// The (featureSelected)="..."  event listener is a relict of our "old" navigation approach using ngIf. We no longer need it, so feel free to change this template to:

// <app-header></app-header>
// <div class="container">
//   <div class="row">
//     <div class="col-md-12">
//       <router-outlet></router-outlet>
//     </div>
//   </div>
// </div>
