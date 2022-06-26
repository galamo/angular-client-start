import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchQuery'
})
export class SearchPipe implements PipeTransform {
  transform(items: Array<any>, query:string, by?:string): Array<any> {
    if(!items) return [];
    if(!query) return items;
    return items.filter(item=>item[by || 'title']?.toString().toLowerCase().includes(query))
  }
}
