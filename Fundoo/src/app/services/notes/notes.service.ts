import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpServicesService } from '../http-services.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  uri = environment.backendUri + 'notes/addNotes'

  constructor(private http:HttpServicesService) { }

  addNote(data): Observable<any>{
    return this.http.post(data, this.uri);
  }


}
