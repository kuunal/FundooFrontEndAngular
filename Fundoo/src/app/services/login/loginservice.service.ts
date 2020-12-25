import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpServicesService } from '../http-services.service';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  registerUri:string = `${environment.backendUri}user/userSignUp`;
  loginUri:string = `${environment.backendUri}user/login`;

  constructor(private http:HttpServicesService) { }

  login(data): Observable<any>{
    return this.http.post(data, this.loginUri);
  }

  register(data): Observable<any>{
    return this.http.post(data, this.registerUri);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

}
