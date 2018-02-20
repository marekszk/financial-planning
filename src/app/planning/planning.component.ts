import { Component, OnInit } from '@angular/core';
import { tableActions } from '../shared/consts/table-actions';
import { plansMock } from '../shared/mocks/plans.mock';
import { Plan } from '../shared/classes/plan';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

  mockData;
  mockActions;
  plannedValue: number;
  toPlanValue: number;

  constructor() { }

  public ngOnInit() {
    this.mockData = this.mapIntoObjects(plansMock);
    this.mockActions = tableActions;
    this.countSum();
    this.toPlanValue = 2000;
  }

  public addNewPlan(value) {
    this.mockData = this.mockData.concat([
      new Plan( Object.assign({ id: Math.floor(Math.random() * 100) + 4 }, value) )
    ]);
    this.countSum();
  }

  private mapIntoObjects(data) {
    return data.map(
      item => new Plan(item)
    );
  }

  private deleteItem( i ) {
    this.mockData = this.mockData.filter(
      (element, index) => {
        return i !== index;
      }
    );
    this.countSum();
  }

  private editItem( data ) {
    this.mockData = this.mockData.map(
      element => {
        if ( element.id === +data.id ) {
          return new Plan(data);
        } else {
          return element;
        }
    });
    this.countSum();
  }

  private countSum() {
    this.plannedValue = 0;
    this.mockData.forEach(
      element => {
        this.plannedValue += element.$value;
    });
  }
}
