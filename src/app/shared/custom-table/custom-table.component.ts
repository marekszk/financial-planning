import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css']
})
export class CustomTableComponent implements OnChanges {

  @Input() data: Array<any>;
  @Input() keys: Array<string>;

  values: Array<Array<string>>;

  constructor() { }

  ngOnChanges() {
    this.values = this.data.map(
      element => {
        return Object.values(element);
      }
    );

  }

}
