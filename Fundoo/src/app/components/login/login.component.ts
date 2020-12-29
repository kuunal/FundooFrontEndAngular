import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginserviceService } from 'src/app/services/login/loginservice.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  backendUri: string = environment.backendUri;
  hide: boolean = true;
  myForm: FormGroup;

  constructor(
    private builder: FormBuilder,
    private service: LoginserviceService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.myForm = this.builder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^[a-zA-Z0-9]+[\\.\\-\\+\\_]?[a-zA-Z0-9]+@[a-zA-Z0-9]+[.]?[a-zA-Z]{2,4}[\\.]?([a-z]{2,4})?$'
          ),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*[0-9])(?=.*[A-Z])(?=[a-zA-Z0-9]*[^a-zA-Z0-9][a-zA-Z0-9]*$).{8,}'
          ),
        ],
      ],
    });
  }

  get email() {
    return this.myForm.get('email');
  }

  get password() {
    return this.myForm.get('password');
  }

  redirectToSignUp() {
    this.router.navigate(['/register']);
  }

  submit(): void {
    console.log(this.myForm.value);

    let data = { ...this.myForm.value, cartId: '' };
    console.log(data);

    this.service.login({ ...data }).subscribe(
      (response) => {
        localStorage.setItem('token', response.id);
        localStorage.setItem('data', JSON.stringify(response));
        this.router.navigate(['/notes']);
      },
      (error) =>
        this.snackBar.open(error, '', {
          duration: 2000,
        })
    );
  }
}
