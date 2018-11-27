import {Injectable, Pipe, PipeTransform} from '@angular/core';
import { Sitter } from '../entities/sitter';

@Pipe({name: 'filterSitters'})
@Injectable({providedIn: 'root'})
export class FilterSitters implements PipeTransform {


  transform(items: Sitter[], search: string): any {
    // your custom code here

    console.log(items);
    console.log(search);

    if (search !== undefined) {
      return items.filter(x => x.name.toLowerCase().includes(search.toLowerCase()) 
      || x.gender.includes(search));
    }
    return items;
    

    // write a working filter here.
    // firstname, lastname, zipCode, gender


    // Return an array that matches the search criteria
    // return [];
  }

}
