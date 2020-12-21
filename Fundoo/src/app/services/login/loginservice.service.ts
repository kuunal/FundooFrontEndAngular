import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpServicesService } from '../http-services.service';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http:HttpServicesService) { }

  login(data, uri): Observable<any>{
    return this.http.post(data, uri);
  }

  register(data, uri): Observable<any>{
    return this.http.post(data, uri);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

}
