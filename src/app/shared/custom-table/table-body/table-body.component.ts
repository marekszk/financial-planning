import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.css']
})
export class TableBodyComponent implements OnInit {

  @Input() values: Array<Array<string>>;

  constructor() { }

  ngOnInit() {
  }

}
