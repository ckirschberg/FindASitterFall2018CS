import { TempDataService } from './../temp-data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Sitter } from '../entities/sitter';
import { Router } from '@angular/router';
import { SittersActions } from '../sitters-list/sitters.actions';
import { IAppState } from '../store';
import { NgRedux } from '@angular-redux/store';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm;
  isBaby: boolean;

  constructor(private fb: FormBuilder, private data: TempDataService,
    private router: Router, private sittersActions: SittersActions,
    private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    // Here the component subscribes to the sitters state.
    // When someone changes the sitters state, this function is 
    // called, setting the isBaby variable to be the value of 
    // the isBaby var. in the state.
    
    this.ngRedux.select(state => state.sitters)
    .subscribe((sitterState) => {
      this.isBaby = sitterState.isBaby;
    });

    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['',  Validators.required],
      name: ['', Validators.required]
    });
  }

  onSubmit(form) {
    // Call an api, to save new sitter
    let sitter = form.value as Sitter;

    this.data.addSitter(sitter);
    // console.log(this.data.sitters);
    this.router.navigate(['/login']);
  }
}
