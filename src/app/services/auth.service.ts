import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Injectable()
export class AuthService {

  constructor() { }

  public registrarate(model) {
    return timer(300).pipe(map(res => {
      return { code: 1 };
    }));
  }

  public getUser() {
    return timer(300).pipe(map(res => {
      return {
        id: '123',
        userName: 'Admin',
        email: 'admin@site.com',
        password: '1234567890'
      };
    }));
  }
}
