var deepFreeze = require('deep-freeze');
import { sittersReducer } from './sitters.reducer';
import * as types from './sitters.actions';

describe('users reducer', () => {

  it('should return the initial state', () => {
    expect(sittersReducer(undefined, {})).toEqual({isBaby: undefined});
  });

it('Toggle isBaby or sitter', () => {
  // Initial state
  let startState = {isBaby: undefined};

  // Checks for state mutations.
  deepFreeze(startState);

  // Expect, after calling reducer with state and action => new state is returned without mutations.
  expect( sittersReducer(startState, 
    {
      type: types.SittersActions.SET_REGISTER_BABYTYPE, 
      payload: true 
    })).toEqual({isBaby: true});
});
});


