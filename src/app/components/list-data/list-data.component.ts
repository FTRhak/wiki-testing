import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.less']
})
export class ListDataComponent implements OnInit {
  @Input() data = [];
  public query: string = '';
  constructor() { }

  ngOnInit() {
  }

}
