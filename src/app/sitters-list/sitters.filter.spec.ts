import { TestBed, async } from '@angular/core/testing';
import { FilterSitters } from './sitters.filter';
import { TempDataService } from '../services/temp-data.service';
import { Sitter } from '../entities/sitter';

// 1.0: Valid data: Search "Azat Baran" should give 1 result, Azat Baran
// 1.1: Valid data: Search "azat" should give 1 result, Azat Baran.
// 1.2:
// 1.3:

// 2.0: Invalid data: Search 'Azat' with undefined array.
// 2.1: 

describe('App: Babies', () => {
       TestBed.configureTestingModule({
     declarations: [
       FilterSitters
     ]
   });

   it('1.0: Valid data: Search "Azat Baran" should give 1 result, Azat Baran', () => {
    // Arrange
    const sitters: Sitter[] = TempDataService.getInitialSitterTestState().sitters;
    const filter: FilterSitters = new FilterSitters();

    //Act
    const result = filter.transform(sitters, 'Azat');

    //Assert (expect)
    expect(result.length).toBe(1);
    expect(result[0].name).toBe('Azat Baran');
   });

   it('1.1: Valid data: Search "azat" should give 1 result, Azat Baran.', () => {
     // Arrange
    const sitters: Sitter[] = TempDataService.getInitialSitterTestState().sitters;
    const filter: FilterSitters = new FilterSitters();

    //Act
    const result = filter.transform(sitters, 'azat');

    //Assert (expect)
    expect(result.length).toBe(1);
    expect(result[0].name).toBe('Azat Baran');
   })
 });

