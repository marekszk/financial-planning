import { Component, OnInit } from '@angular/core';
import { revenuesMock } from '../shared/mocks/revenue.mock';
import { tableActions } from '../shared/consts/table-actions';
import { Router } from '@angular/router';
import { Revenue } from '../shared/classes/revenue';

@Component({
  selector: 'app-revenues',
  templateUrl: './revenues.component.html',
  styleUrls: ['./revenues.component.scss']
})
export class RevenuesComponent implements OnInit {

  mockData;
  mockActions;

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
    this.mockData = this.mapIntoObjects(revenuesMock);
    this.mockActions = tableActions;
  }

  public addNewRenevue(value) {
    this.mockData = this.mockData.concat([
      new Revenue( Object.assign({ id: Math.floor(Math.random() * 100) + 4 }, value) )
    ]);
  }

  private mapIntoObjects(data) {
    return data.map(
      item => new Revenue(item)
    );
  }

  private deleteItem( i ) {
    this.mockData = this.mockData.filter(
      (element, index) => {
        return i !== index;
      }
    );
  }

  private editItem( data ) {
    this.mockData = this.mockData.map(
      element => {
        if ( element.id === +data.id ) {
          return new Revenue(data);
        } else {
          return element;
        }
    });
  }
}
