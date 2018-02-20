import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AfterViewInit, OnChanges, SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import Table from '../table';

@Component({
  selector: 'table-item-add',
  templateUrl: './table-item-add.component.html',
  styleUrls: ['./table-item-add.component.scss']
})
export class TableItemAddComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() keys: Array<string>;
  @Input() widthsInp: Array<number>;

  @Output() adding: EventEmitter<Object> = new EventEmitter<Object>();

  widths: Array<number>;
  item: Object;
  formSubmitted: boolean;

  constructor() { }

  public ngOnInit() {
    this.formSubmitted = false;
    this.widths = Array.from(this.widthsInp);
    document.querySelector('.item-adding__id').setAttribute('style', `width:${this.widths.shift()}%`);
  }

  public ngOnChanges(changes: SimpleChanges) {
    if ( this.keys[0] === 'id' ) {
        this.keys = this.keys.filter( (key, index) => index !== 0 );
        this.item = this.clearItem();
    }
  }

  public ngAfterViewInit() {
    const fieldList = Array.from(document.querySelectorAll('.item-adding__field'));
    Table.setWidths(fieldList, this.widths);
  }

  public addNewItem() {
    this.formSubmitted = true;
    if (!this.checkIfErrors()) {
      this.adding.emit(this.makeItemToEmit());
      this.formSubmitted = false;
    }
  }

  private checkIfErrors(): boolean {
    return !Object.values(this.item).every(
      value => value !== ''
    );
  }

  private makeItemToEmit() {
    const item = new Object();
    this.keys.forEach( key => item[key] = this.item[key] );
    return item;
  }

  private clearItem(): Object {
    const item = new Object();
    this.keys.forEach( key => Object.assign(item, item[key] = '' ) );
    return item;
  }
}
