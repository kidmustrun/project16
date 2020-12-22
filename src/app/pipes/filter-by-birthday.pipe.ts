import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByBirthday'
})
export class FilterByBirthdayPipe implements PipeTransform {

  transform(workers,sorting) {
    // if(sorting>0)
    // return workers.sort((a, b) => { a = new Date(a.birthday);
    //   b = new Date(b.birthday);
    //   return a>b ? -1 : a<b ? 1 : 0;})
    // else if(sorting=0) return workers.sort((a, b) => { a = new Date(a.birthday);
    //   b = new Date(b.birthday);
    //   return a>b ? 1 : a<b ? -1 : 0;})
  }

}
