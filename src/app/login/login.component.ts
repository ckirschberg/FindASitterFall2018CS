import { TempDataService } from './../temp-data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Sitter } from '../entities/sitter';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: any;

  constructor(private fb: FormBuilder, private router: Router, 
    private authService: AuthService, private tmp: TempDataService) { }


  ngOnInit() {
    this.loginForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.minLength(5)] ],
        password: ['', Validators.required] 
      }
    )
  }

  onSubmit(loginForm) {

    if (loginForm.valid) {

      // Send request to back-end to validate login.
      this.authService.login().subscribe(result => {
        // Navigate based on a certain condition.
        console.log("hej");

        this.router.navigate(['/portal/findasitter']);  
      });

      console.log("hej igen");
      

    } else {
      // Punish user for not filling out fields.
    }

    console.log(loginForm);
  }

}
