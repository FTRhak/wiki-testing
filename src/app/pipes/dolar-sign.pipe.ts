import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dolarSign'
})
export class DolarSignPipe implements PipeTransform {

  transform(value: string): any {
    return (value ? value : '0') + '$';
  }

}
