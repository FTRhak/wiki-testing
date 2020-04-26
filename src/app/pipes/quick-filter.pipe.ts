import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quickFilter'
})
export class QuickFilterPipe implements PipeTransform {

  transform(value: any[], search: string): any[] {
    let res = [];

    if (!search) {
      res = value;
    } else if (Array.isArray(value)) {
      res = value.filter(el => el.name.indexOf(search) !== -1)
    }
    return res;
  }

}
