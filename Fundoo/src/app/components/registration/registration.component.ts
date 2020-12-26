import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginserviceService } from 'src/app/services/login/loginservice.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  backendUri:string = environment.backendUri;
  myForm: FormGroup;
  userAlreadyExists: boolean = false;

  constructor(private builder : FormBuilder
    , private service:LoginserviceService
    , private router: Router
    , private snackBar: MatSnackBar) { }

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

  signIn():void{
    this.router.navigate(["/login"])
  }
  
  submit():void{
    let data = this.myForm.value;
    data.cartId = "5fdef64cd5d3de001e5d843a";
    data.service = "advance";
    this.service.register(data).subscribe(
      response=>this.router.navigate(["/login"]),
      error=>this.snackBar.open('User already exists',``, {
        duration: 2000,
      })
    );
  }

  setUserAlreadyExist(){
    this.userAlreadyExists=true;
  }
}
