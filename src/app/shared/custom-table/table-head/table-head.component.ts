import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'table-head',
  templateUrl: './table-head.component.html',
  styleUrls: ['./table-head.component.css']
})
export class TableHeadComponent implements OnInit {

  @Input() keys: Array<string>;

  constructor() { }

  ngOnInit() {
  }

}
