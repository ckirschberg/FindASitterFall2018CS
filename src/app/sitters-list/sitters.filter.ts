import {Injectable, Pipe, PipeTransform} from '@angular/core';
import { Sitter } from '../entities/sitter';

@Pipe({name: 'filterSitters'})
@Injectable({providedIn: 'root'})
export class FilterSitters implements PipeTransform {


  transform(items: Sitter[], search: string): any {
    // your custom code here

    console.log(items);
    console.log(search);
    
    // Return an array that matches the search criteria
    return [];
  }

}
