import { Component, OnChanges, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'table-head',
  templateUrl: './table-head.component.html',
  styleUrls: ['./table-head.component.css']
})
export class TableHeadComponent implements OnChanges, AfterViewInit {

  @Input() keys: Array<string>;
  @Input() widths: Array<number>;
  @Input() ifActions: boolean;

  constructor() { }

  ngOnChanges() {
  }

  ngAfterViewInit() {
    const tdList = document.querySelectorAll('.table-head__td');
    Array.from(tdList).forEach(
      (element, i) => {
        let lastElem = 0;
        if ( i === this.widths.length - 1 ) {
          lastElem = -1;
        }
        element.setAttribute('style', `width: ${this.widths[i] + lastElem}%`);
      }
    );
  }

}
