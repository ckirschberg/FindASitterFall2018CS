var deepFreeze = require('deep-freeze');
import { sittersReducer } from './sitters.reducer';
import * as types from './sitters.actions';
import { TempDataService } from '../services/temp-data.service';

describe('users reducer', () => {

  it('should return the initial state', () => {
    expect(sittersReducer(undefined, {})).toEqual({isBaby: undefined});
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
});


