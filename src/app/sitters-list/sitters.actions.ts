
import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './../store';
import { Sitter } from '../entities/sitter';

@Injectable({
  providedIn: 'root'
})
// This class is an action creator.
export class SittersActions {

  // We dependency inject the redux library.
  constructor (
    private ngRedux: NgRedux<IAppState>) {} 

    // This gives a strongly typed way to call an action.
  static SET_REGISTER_BABYTYPE: string = 'SET_REGISTER_BABYTYPE'; 
  static CREATE_SITTER: string = 'CREATE_SITTER'; 
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
    this.ngRedux.dispatch({
      type: SittersActions.CREATE_SITTER,
      payload: sitter
    })
  }

  deleteSitter(sitterId: string) : void {
    this.ngRedux.dispatch({
      type: SittersActions.DELETE_SITTER,
      payload: sitterId
    })
  }

}





