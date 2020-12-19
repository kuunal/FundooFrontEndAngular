import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email:string;
  password:string;
  hide:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  submit():void{
    console.log(this.email,this.password);
  }

}
