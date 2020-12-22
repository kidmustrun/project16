import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(workersList, searchStr: string) {
    if (!searchStr) {
    return workersList;
    }
    return workersList.filter(
    function (element) {
    if (element.name === searchStr || String(element.id) === searchStr || element.surname === searchStr || element.phone === searchStr){
      return element
    }
    
  
  });
}

}
