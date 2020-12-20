import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  myForm: FormGroup;

  constructor(private builder : FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.builder.group({
      firstName: ['',[
        Validators.required
      ]],
      lastName: ['',[
        Validators.required
      ]],
      email: ['',[
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9]+[\\.\\-\\+\\_]?[a-zA-Z0-9]+@[a-zA-Z0-9]+[.]?[a-zA-Z]{2,4}[\\.]?([a-z]{2,4})?$")
      ]],
      password: ['',[
        Validators.required,
        Validators.pattern("^(?=.*[0-9])(?=.*[A-Z])(?=[a-zA-Z0-9]*[^a-zA-Z0-9][a-zA-Z0-9]*$).{8,}")
      ]],
      confirmPassword: ['',[
        Validators.required,
      ]], 
      showPassword:'false'
    })
  }

  get email(){
    return this.myForm.get('email');
  }

  get firstName(){
    return this.myForm.get('firstName');
  }
  
  get lastName(){
    return this.myForm.get('lastName');
  }

  get password(){
    return this.myForm.get('password');
  }

  get confirmPassword(){
    return this.myForm.get('confirmPassword').value === this.myForm.get('password').value;
  }
  get showPassword(){
    return this.myForm.get('showPassword').value;
  }

  submit():void{
    console.log(this.myForm.value);
  }
}
