
import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './../store';
import { Sitter } from '../entities/sitter';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
// This class is an action creator.
export class SittersActions {

  // We dependency inject the redux library.
  constructor (
    private ngRedux: NgRedux<IAppState>, 
    private apiService: ApiService) {} 

    // This gives a strongly typed way to call an action.
  static SET_REGISTER_BABYTYPE: string = 'SET_REGISTER_BABYTYPE'; 
  static CREATE_SITTER: string = 'CREATE_SITTER'; 
  static CREATE_SITTER_SUCCESS: string = 'CREATE_SITTER_SUCCESS'; 
  static CREATE_SITTER_FAILURE: string = 'CREATE_SITTER_FAILURE'; 
  static DELETE_SITTER: string = 'DELETE_SITTER'; 
  
  // This method can be called from a component, and will dispatch an action.
  // Parameter is what we want to pass from the component to the reducer.
  setType(isBaby: boolean): void {
    this.ngRedux.dispatch({
      type: SittersActions.SET_REGISTER_BABYTYPE,
      payload: isBaby
    })
  }
  createSitter(sitter: Sitter) : void {
    console.log("1");

    // This action is called to set a spinner, showing system is working.
    this.ngRedux.dispatch({
      type: SittersActions.CREATE_SITTER
    });

    // action creator calls web service, and dispatches new redux action.
    this.apiService.createSitter(sitter).subscribe(response => {
      console.log("3");
      console.log(response);
      
      // If all goes well.
      this.ngRedux.dispatch({
        type: SittersActions.CREATE_SITTER_SUCCESS,
        payload: sitter // response could be used as payload.
        // sitter obj is missing the new _id generated in the database.
      });
    }, error => {
      console.log("3");
      console.log(error);

      //If web service fails.
      this.ngRedux.dispatch({
        type: SittersActions.CREATE_SITTER_FAILURE,
        payload: error
      });
    });
    
    console.log("2");
  }

  deleteSitter(sitterId: string) : void {
    this.ngRedux.dispatch({
      type: SittersActions.DELETE_SITTER,
      payload: sitterId
    })
  }

}





