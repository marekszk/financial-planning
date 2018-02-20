import { Component, OnInit } from '@angular/core';
import { categoriesMock } from 'app/shared/mocks/categories.mock';
import { tableActions } from 'app/shared/consts/table-actions';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Category } from '../shared/classes/category';
import { CategoriesService } from "./categories.service";
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers: [CategoriesService]
})
export class CategoriesComponent implements OnInit {

  data;
  mockActions;
  loadingData = true;

  constructor(
    private _router: Router,
    private _service: CategoriesService
  ) { }

  public ngOnInit() {
    this.loadingData = true;
    this._service.getCategories().subscribe(
      data => {
        this.data = this.mapIntoObjects(data.results);
        console.log(this.data);
        this.mockActions = tableActions;
        this.loadingData = false;
      }
    );
  }

  public addNewCategory(value) {
    this.data = this.data.concat([
      Object.assign({ id: 3 }, value)
    ]);
  }

  private mapIntoObjects(data) {
    return data.map(
      item => new Category(item)
    );
  }

  private deleteItem( i ) {
    this.data = this.data.filter( (element, index) =>  i !== index );
  }

  private editItem( data ) {
    this.data = this.data.map(
      element => {
        if ( element.id === data.id ) {
          return new Category(data);
        } else {
          return element;
        }
    });
  }

}
