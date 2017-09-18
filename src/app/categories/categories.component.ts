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
  constructor() { }

  ngOnInit() {
  }

}
