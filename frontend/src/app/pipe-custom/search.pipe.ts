import { Pipe, PipeTransform } from '@angular/core';
import { Iproduct } from '../interface/Iproduct';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value:Iproduct[], search:string): any {
    return value.filter(item => item.name.toLowerCase().includes(search.toLocaleLowerCase()));
  }

}
