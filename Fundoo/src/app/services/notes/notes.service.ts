import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpServicesService } from '../http-services.service';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class NotesService {

  addUri = environment.backendUri + 'notes/addNotes'
  getUri = environment.backendUri + '/notes/getNotesList'
  private _refresh$ = new Subject<void>();


  getRefreshedData(){
    return this._refresh$;
  }

  constructor(private http:HttpServicesService) { }

  addNote(data): Observable<any>{
    return this.http.post(data, this.addUri).pipe(
      tap(()=>{
        this._refresh$.next();
      })
    );
  }


  getNote(): Observable<any>{
    return this.http.get(this.getUri);
  }
}
