import { TempDataService } from './../services/temp-data.service';
import { SittersActions } from './sitters.actions';
import { SittersState } from './../store';
import { tassign } from 'tassign';

const INITIAL_STATE: SittersState = TempDataService.getInitialSitterTestState();

// My reducer functions are responsible for changing state, by copying and 
// changing the copy, since state is immutable.
export function sittersReducer(state: SittersState = INITIAL_STATE, action:any) {
 
  switch (action.type) {
    case SittersActions.CREATE_SITTER: // no payload, just set spinner
      return tassign(state, { isProcessing: true });

    case SittersActions.CREATE_SITTER_FAILURE: // If web service call fails.
      return tassign(state, { isProcessing: false });

    case SittersActions.CREATE_SITTER_SUCCESS: //action.payload is a sitter object.
      return tassign(state, { isProcessing: false, sitters:  [...state.sitters, action.payload]});
  
    case SittersActions.DELETE_SITTER: // action.payload is a sitterId
      return tassign(state, { sitters: 
        state.sitters.filter(sitter => sitter._id !== action.payload) });


        
    // When writing the CRUD cases, look into javascripts spread operator.


  case SittersActions.SET_REGISTER_BABYTYPE: // action.payload is a boolean.
    // Copies state, and inserts new isBaby value in new state
    // Thereby "changing" the state
    // state.isBaby = action.payload; // state mutations : NO NO!
    // return state;

    // return Object.assign({}, state, {isBabi: action.payload});
    return tassign(state, { isBaby: action.payload });
    

    // console.log(action.payload);
    // return state;

  
 
  default:
    return state;
  }
}
