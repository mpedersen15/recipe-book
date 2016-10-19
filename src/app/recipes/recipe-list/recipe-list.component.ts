import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = []; 
	@Output()recipeSelected = new EventEmitter<Recipe>();
	recipe = new Recipe("Dummy", "Dummy", "http://prevenblog.com/wp-content/uploads/Dummy.jpg");
	
	onSelected(recipe: Recipe){
		console.log("recipe selected: ");
		console.log(recipe);
		this.recipeSelected.emit(recipe);
	}
	
  constructor() { }

  ngOnInit() {
  }

}
