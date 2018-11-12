import { SittersActions } from './sitters.actions';
import { SittersState } from './../store';
import { tassign } from 'tassign';

const INITIAL_STATE: SittersState = {isBaby: undefined, sitters: [
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

// My reducer functions are responsible for changing state, by copying and 
// changing the copy, since state is immutable.
export function sittersReducer(state: SittersState = INITIAL_STATE, action:any) {
 
  switch (action.type) {
    case SittersActions.CREATE_SITTER: //action.payload is a sitter object.

      return tassign(state, { sitters:  [...state.sitters, action.payload]});
  
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
