import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  mockData = [
    {
      id: '1',
      name: 'Żywność',
    },
    {
      id: '2',
      name: 'Rozrywka',
    },
    {
      id: '3',
      name: 'Rachunki',
    },
  ];

  mockActions = [
    {
      actionType: 'delete',
      name: 'Usuń',
      color: '#e0301e',
    },
    {
      actionType: 'edit',
      name: 'Edytuj',
      color: '#eb8c00',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  private deleteItem( i ) {
    console.log( i );
  }

}
