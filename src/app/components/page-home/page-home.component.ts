import { Component, OnInit } from '@angular/core';
import { DataManagerService } from 'src/app/services/data-manager.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.less']
})
export class PageHomeComponent implements OnInit {
  public data: any[];
  constructor(private dataManagerService: DataManagerService) { }

  ngOnInit() {
    this.dataManagerService.getList().subscribe(res => {
      this.data = res;
    });
  }

}
