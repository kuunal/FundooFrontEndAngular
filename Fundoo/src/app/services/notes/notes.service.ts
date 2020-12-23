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
  unPinUri = environment.backendUri + 'notes/pinUnpinNotes';
  deleteUri = environment.backendUri + '/notes/trashNotes';
  changeColorUri = `${environment.backendUri}notes/changesColorNotes`;
  archiveUri = `${environment.backendUri}notes/archiveNotes`

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

  togglePin(data): Observable<any>{
    return this.http.post(data ,this.unPinUri).pipe(
      tap(()=>{
        this._refresh$.next();
      })
    );
  }

  deleteNotes(data){
    return this.http.post(data ,this.deleteUri).pipe(
      tap(()=>{
        this._refresh$.next();
      })
    );
  }

  setColor(data) {
    return this.http
    .post(data,this.changeColorUri);
  }

  toggleArchive(data){
    return this.http.post(data, this.archiveUri).pipe(
      tap(()=>{
        this._refresh$.next();
      })
      );
  }
}

