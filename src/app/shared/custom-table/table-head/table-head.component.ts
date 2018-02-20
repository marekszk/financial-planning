import { Component, Input, AfterViewInit } from '@angular/core';
import Table from '../table';

@Component({
  selector: 'table-head',
  templateUrl: './table-head.component.html',
  styleUrls: ['./table-head.component.scss']
})
export class TableHeadComponent implements AfterViewInit {

  @Input() headers: Array<string>;
  @Input() widths: Array<number>;
  @Input() ifActions: boolean;

  constructor() { }

  ngAfterViewInit() {
    const tdList = document.querySelectorAll('.table-head__td');
    Table.setWidths(tdList, this.widths);
  }

}
