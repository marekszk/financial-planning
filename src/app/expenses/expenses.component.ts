import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tableActions } from '../shared/consts/table-actions';
import { expensesMock } from '../shared/mocks/expense.mock';
import { Expense } from '../shared/classes/expense';
import { Category } from '../shared/classes/category';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

  mockData;
  mockActions;

  constructor(
    private _router: Router
  ) { }

  public ngOnInit() {
    this.mockData = this.mapIntoObjects(expensesMock);
    this.mockActions = tableActions;
  }

  public addNewExpense(value) {
    this.mockData = this.mockData.concat([
      Object.assign({ id: 3 }, value)
    ]);
  }

  private mapIntoObjects(data) {
    return data.map(
      item => new Expense(item)
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
          return new Expense(data);
        } else {
          return element;
        }
    });
  }
}
