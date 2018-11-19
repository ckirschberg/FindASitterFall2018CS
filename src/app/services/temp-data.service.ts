import { Injectable } from '@angular/core';
import { Sitter } from '../entities/sitter';
import { SittersState } from '../store';

@Injectable({
  providedIn: 'root'
})
export class TempDataService {

  public static getInitialSitterTestState() : SittersState {
    return {isBaby: undefined, sitters: [
      {username: 'azat', password: 'secret', name: 'Azat Baran', gender: 'male',
      birthDate: new Date(1995, 2, 16), noCriminalRecord: true, noChildRecord: true,
      hourlyWage: 1337, address: 'some', zipCode: '2600', city: 'Glostrup' },
      
      {username: 'chrk', password: 'secret', name: 'Christian Kirschberg', gender: 'male',
      birthDate: new Date(1979, 0, 1), noCriminalRecord: true, noChildRecord: true,
      hourlyWage: 150, address: 'some', zipCode: '3400', city: 'Hillerød' },
  
      {username: 'salik', password: 'secret3', name: 'Salik fasdjæ', gender: 'male',
      birthDate: new Date(1995, 1, 1), noCriminalRecord: true, noChildRecord: true,
      hourlyWage: 100, address: 'some', zipCode: '2400', city: 'København NV' }
    ]};
  };


  sitters: Sitter[] = [
    {username: 'azat', password: 'secret', name: 'Azat Baran', gender: 'male',
    birthDate: new Date(1995, 2, 16), noCriminalRecord: true, noChildRecord: true,
    hourlyWage: 1337, address: 'some', zipCode: '2600', city: 'Glostrup' },
    
    {username: 'chrk', password: 'secret', name: 'Christian Kirschberg', gender: 'male',
    birthDate: new Date(1979, 0, 1), noCriminalRecord: true, noChildRecord: true,
    hourlyWage: 150, address: 'some', zipCode: '3400', city: 'Hillerød' },

    {username: 'salik', password: 'secret3', name: 'Salik fasdjæ', gender: 'male',
    birthDate: new Date(1995, 1, 1), noCriminalRecord: true, noChildRecord: true,
    hourlyWage: 100, address: 'some', zipCode: '2400', city: 'København NV' }
  ];
  
  constructor() { }

  public addSitter(sitter: Sitter): void {
    this.sitters.push(sitter);
  }

}
