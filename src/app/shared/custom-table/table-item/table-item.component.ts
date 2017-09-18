import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.css']
})
export class TableItemComponent implements OnChanges {

  @Input() item: any = {
    id: '1',
    name: 'Żywność',
  };
  data: Array<string>;

  constructor() { }

  ngOnChanges() {
    this.data = Object.values(this.item);
  }

}
