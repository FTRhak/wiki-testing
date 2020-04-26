import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DataManagerService {
  private data = [];
  constructor() {
    this.data = [];
    for (let i = 0; i < 10; i++) {
      this.data.push({
        id: i,
        name: 'Name_' + i,
        price: ((i + 13) * 7) % 11 + 1
      });
    }
  }

  getList() {
    return timer(300).pipe(map(res => {
      return this.data;
    }));
  }
  getItem(id: number) {
    return timer(300).pipe(map(res => {
      return this.data[id];
    }));
  }
}
