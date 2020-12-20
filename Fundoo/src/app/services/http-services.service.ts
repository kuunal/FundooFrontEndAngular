import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {

  constructor(private http: HttpClient) { }

  postService(data,url: string,isRequired = false,header=null) {
    return this.http.post(url,data,isRequired && header);
  }

  getService(url:string,isRequired = false,header=null){
    return this.http.get(url,isRequired && header);
  }
}
