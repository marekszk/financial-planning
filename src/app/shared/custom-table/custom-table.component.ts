import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import Table from './table';

@Component({
  selector: 'custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnChanges {

  @Input() data: Array<any>;
  @Input() headers: Array<string>;
  @Input() widths: Array<number>;
  @Input() actions: Array<any>;

  @Output() deleting: EventEmitter<number> = new EventEmitter<number>();
  @Output() editing: EventEmitter<number> = new EventEmitter<number>();
  @Output() adding: EventEmitter<Object> = new EventEmitter<Object>();

  table: Table;

  constructor() { }

  public ngOnChanges() {
    this.table = new Table(this.data, this.headers, this.widths, this.actions);
  }

  public deleteItem( i ) {
    this.deleting.emit( i );
  }
  public editItem( i ) {
    this.editing.emit( i );
  }
  public addItem( item ) {
    this.adding.emit( item );
  }
}
