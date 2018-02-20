import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.scss']
})
export class TableBodyComponent implements OnInit {

  @Input() values: Array<Array<string>>;
  @Input() widths: Array<number>;
  @Input() actions: Array<string>;
  @Input() keys: Array<string>;

  @Output() deleting: EventEmitter<number> = new EventEmitter<number>();
  @Output() editing: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  private deleteItem( i ) {
    this.deleting.emit( i );
  }

  private editItem( i ) {
    this.editing.emit( i );
  }

}
