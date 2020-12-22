import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginserviceService } from 'src/app/services/login/loginservice.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  backendUri:string = environment.backendUri;
  hide:boolean = true;
  myForm: FormGroup;

  constructor(private builder : FormBuilder
    , private service:LoginserviceService
    , private router: Router
    , private snackBar: MatSnackBar) { }

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
    this.service.login(this.myForm.value, `${this.backendUri}user/login`).subscribe(
      response=>{
        localStorage.setItem('token', response.id);
        localStorage.setItem('data', response)
        this.router.navigate(['/home']);
      },
      error=>this.snackBar.open('Error registering! Please try again later.', '', {
        duration: 2000,
      })
    );
  }

}
