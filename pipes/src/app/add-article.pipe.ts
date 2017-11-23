import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addArticle'
})
export class AddArticlePipe implements PipeTransform {

  transform(value: string, args?: any): string {
  	let vowels = ['A','E','I','O','U'];
  	let result = vowels.indexOf(value[0]) == -1 ? `A ${value}` : `An ${value}`; 
    return result;
  }

}
