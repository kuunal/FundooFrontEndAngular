import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  backendUri:string = environment.backendUri;
  hide:boolean = true;
  myForm: FormGroup;

  constructor(private builder : FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.builder.group({
      email: ['',[
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9]+[\\.\\-\\+\\_]?[a-zA-Z0-9]+@[a-zA-Z0-9]+[.]?[a-zA-Z]{2,4}[\\.]?([a-z]{2,4})?$")
      ]],
      password: ['',[
        Validators.required,
        Validators.pattern("^(?=.*[0-9])(?=.*[A-Z])(?=[a-zA-Z0-9]*[^a-zA-Z0-9][a-zA-Z0-9]*$).{8,}")
      ]]
    })
  }

  get email(){
    return this.myForm.get('email');
  }

  get password(){
    return this.myForm.get('password');
  }

  submit():void{
    console.log(this.myForm.value)
  }

}
