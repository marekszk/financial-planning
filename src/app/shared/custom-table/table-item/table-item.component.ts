import { Component, OnChanges, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import Table from '../table';

@Component({
  selector: 'table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.scss']
})
export class TableItemComponent implements OnChanges, AfterViewInit {

  @Input() item: any;
  @Input() widths: Array<number>;
  @Input() keys: Array<string>;
  @Input() actions: Array<any>;
  @Input() i: number;

  @Output() deleting: EventEmitter<number> = new EventEmitter<number>();
  @Output() editing: EventEmitter<Object> = new EventEmitter<Object>();
  data: Array<string>;
  whileEditing: boolean;
  editedData: any;
  formSubmitted: boolean;

  constructor() { }

  ngOnChanges() {
    this.formSubmitted = false;
    this.whileEditing = false;
    this.data = Object.values(this.item);
    this.editedData = new Object();
    this.keys.forEach( (key, index) => this.editedData[key] = String(this.item[index]) );
  }

  ngAfterViewInit() {
    const tdList = document.querySelectorAll('.table-item__td-' + this.i);
    Table.setWidths(tdList, this.widths);
  }

  makeAction( actionType: string ) {
    switch ( actionType ) {
      case 'delete':
        this.deleteItem();
        break;
      case 'edit':
        this.editItem();
        break;
      default:
        console.error('Wrong action type!');
    }
  }

  private deleteItem() {
    this.deleting.emit(this.i);
  }

  public editItem() {
    if (!this.checkIfErrors()) {
      this.whileEditing = !this.whileEditing;
    }

    if ( this.whileEditing && !this.checkIfErrors() ) {
      const inpList = document.querySelectorAll('.field__input-' + this.i);
      Table.setWidths(inpList, this.widths);
    } else {
      this.formSubmitted = true;
      if (!this.checkIfErrors()) {
        this.editing.emit(this.editedData);
      }
    }
  }

  private checkIfErrors(): boolean {
    return !Object.values(this.editedData).every(
      value => value !== ''
    );
  }
}
