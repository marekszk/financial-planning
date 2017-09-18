import { Component, OnChanges, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.css']
})
export class TableItemComponent implements OnChanges, AfterViewInit {

  @Input() item: any = {
    id: '1',
    name: 'Żywność',
  };
  @Input() widths: Array<number>;
  @Input() actions: Array<any>;
  @Input() i: number;

  @Output() deleting: EventEmitter<number> = new EventEmitter<number>();
  data: Array<string>;

  constructor() { }

  ngOnChanges() {
    this.data = Object.values(this.item);
  }

  ngAfterViewInit() {
    this.widths[this.widths.length - 1] -= 1;
    const tdList = document.querySelectorAll('.table-item__td-' + this.i);
    Array.from(tdList).forEach(
      (element, i) => {
        element.setAttribute('style', `width: ${this.widths[i]}%`);
      }
    );
  }

  makeAction( actionType: string ){
    switch ( actionType ) {
      case 'delete':
        this.deleteItem();
        break;
      case 'edit':

        break;
      default:
        console.error('Wrong action type!');
    }
  }

  private deleteItem() {
    this.deleting.emit(this.i);
  }

  private editItem() {

  }
}
