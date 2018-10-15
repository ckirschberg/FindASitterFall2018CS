import { SittersActions } from './sitters.actions';
import { SittersState } from './../store';
import { tassign } from 'tassign';

const INITIAL_STATE: SittersState = {isBaby: undefined}

// My reducer functions are responsible for changing state, by copying and 
// changing the copy, since state is immutable.
export function sittersReducer(state: SittersState = INITIAL_STATE, action:any) {
 
  switch (action.type) {
    // case SittersActions.CREATE_SITTER:
  
  case SittersActions.SET_REGISTER_BABYTYPE:
    // Copies state, and inserts new isBaby value in new state
    // Thereby "changing" the state
    // state.isBaby = action.payload; // state mutations : NO NO!
    return Object.assign({}, state, {isBabi: action.payload});
    // return tassign(state, { isBaby: action.payload });
    

    // console.log(action.payload);
    // return state;

  
 
  default:
    return state;
  }
}
