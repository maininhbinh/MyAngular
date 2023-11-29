import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sginup',
  templateUrl: './sginup.component.html',
  styleUrls: ['./sginup.component.css']
})
export class SginupComponent {
  formSignup = this.formBuilder.group({
    name: [''],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]]
  }, {validators: this.checkPassword})

  constructor(private formBuilder: FormBuilder){}

  checkPassword(form: FormGroup){
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    if(password === confirmPassword) return null;

    return {notMatch: true};
  }

  onHandleSubmit(){
    console.log(this.formSignup.value);
    
  }
}
