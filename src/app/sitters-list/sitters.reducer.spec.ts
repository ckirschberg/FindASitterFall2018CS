var deepFreeze = require('deep-freeze');
import { sittersReducer } from './sitters.reducer';
import * as types from './sitters.actions';
import { TempDataService } from '../services/temp-data.service';

describe('users reducer', () => {

  it('should return the initial state', () => {
    expect(sittersReducer(undefined, {})).toEqual(TempDataService.getInitialSitterTestState());
  });

it('Toggle isBaby or sitter', () => {
  // Initial state
  let startState = TempDataService.getInitialSitterTestState();
  let endState = TempDataService.getInitialSitterTestState();
  endState.isBaby = true;
  // Checks for state mutations.
  deepFreeze(startState);

  // Expect, after calling reducer with state and action => new state is returned without mutations.
  expect( sittersReducer(startState, 
    {
      type: types.SittersActions.SET_REGISTER_BABYTYPE, 
      payload: true 
    })).toEqual(endState);
  });


  it('should delete with valid id', () => {
    // Initial state
    let startState = TempDataService.getInitialSitterTestState();
    
    let endState = {isBaby: undefined, sitters: [
      {_id: '1',username: 'azat', password: 'secret', name: 'Azat Baran', gender: 'male',
      birthDate: new Date(1995, 2, 16), noCriminalRecord: true, noChildRecord: true,
      hourlyWage: 1337, address: 'some', zipCode: '2600', city: 'Glostrup' },
      
      {_id: '3', username: 'salik', password: 'secret3', name: 'Salik fasdjæ', gender: 'male',
      birthDate: new Date(1995, 1, 1), noCriminalRecord: true, noChildRecord: true,
      hourlyWage: 100, address: 'some', zipCode: '2400', city: 'København NV' }
    ]};

    // Checks for state mutations.
    deepFreeze(startState);
  
    // Expect, after calling reducer with state and action => new state is returned without mutations.
    expect( sittersReducer(startState, 
      {
        type: types.SittersActions.DELETE_SITTER, 
        payload: '2'
      })).toEqual(endState);
    });

    it('should delete with in-valid id', () => {
      // Initial state
      let startState = TempDataService.getInitialSitterTestState();
      let endState = TempDataService.getInitialSitterTestState();
      
      // Checks for state mutations.
      deepFreeze(startState);
    
      // Expect, after calling reducer with state and action => new state is returned without mutations.
      expect( sittersReducer(startState, 
        {
          type: types.SittersActions.DELETE_SITTER, 
          payload: undefined
        })).toEqual(endState);
      });
});


