import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: any;

  constructor(private fb: FormBuilder) { }

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
    } else {
      // Punish user for not filling out fields.
    }

    console.log(loginForm);
  }

}
