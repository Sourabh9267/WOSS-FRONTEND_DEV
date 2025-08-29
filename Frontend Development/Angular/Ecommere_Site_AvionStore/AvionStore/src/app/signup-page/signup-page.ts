import { Component } from '@angular/core';
import { SidePageComponent } from '../common/components/side-page-component/side-page-component';
import { ButtonComponent } from '../common/components/button-component/button-component';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-signup-page',
  imports: [NgIf,SidePageComponent,ButtonComponent,RouterLink,ReactiveFormsModule],
  templateUrl: './signup-page.html',
  styleUrl: './signup-page.scss'
})
export class SignupPage {


  signup_data: any = new FormGroup({
    name: new FormControl('Sourabh',[Validators.required, Validators.minLength(10)]),
    email: new FormControl(),
    password: new FormControl(),
    istncAccepted: new FormControl([Validators.requiredTrue])
  });

  get name(){
    return this.signup_data.get('name');
  }

  get email(){
    return this.signup_data.get('email');
  }

  get password(){
    return this.signup_data.get('password');
  }

  get istncAccepted(){
    return this.signup_data.get('istncAccepted');
  }

onSubmitBtn() {
  if (this.signup_data.valid) {
    console.log("Form Data:", this.signup_data.value);
  
  } else {
    console.log("Form is invalid");
    
    this.signup_data.markAllAsTouched();
  }
}
}
