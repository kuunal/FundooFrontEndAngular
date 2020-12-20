import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginserviceService } from './services/login/loginservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private _router: Router,
    private _service: LoginserviceService)
  {}

  canActivate():boolean{
    if(this._service.loggedIn()){
      return true
    }else{
      this._router.navigate(['/login'])
      return false
    }
  }
  
}
