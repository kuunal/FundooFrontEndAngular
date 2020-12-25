import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpServicesService } from '../http-services.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  addUri: string= environment.backendUri + 'notes/addNotes'
  getUri: string= environment.backendUri + '/notes/getNotesList'
  unPinUri: string= environment.backendUri + 'notes/pinUnpinNotes';
  deleteUri: string= environment.backendUri + '/notes/trashNotes';
  changeColorUri: string = `${environment.backendUri}notes/changesColorNotes`;
  archiveUri: string= `${environment.backendUri}notes/archiveNotes`
  updateDateUri: string= `${environment.backendUri}notes/addUpdateReminderNotes`;
  deletePermanentlyUri: string= `${environment.backendUri}notes/deleteForeverNotes`;
  restoreNoteUri: string= `${environment.backendUri}notes/trashNotes`;
  removeRemainderUri: string= `${environment.backendUri}notes/removeReminderNotes`;
  getLabelUri: string= `${environment.backendUri}noteLabels/getNoteLabelList`;
  addLabelUri: string= `${environment.backendUri}noteLabels`;

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

  updateDate(date){
    return this.http.post(date, this.updateDateUri).pipe(
      tap(()=>{
        this._refresh$.next();
      })
      );
  }

  deleteNotesPermanent(data){
    return this.http.post(data, this.deletePermanentlyUri).pipe(
      tap(()=>{
        this._refresh$.next();
      })
      );
  }

  restoreNote(data){
    return this.http.post(data, this.restoreNoteUri).pipe(
      tap(()=>{
        this._refresh$.next();
      })
      );
  }

  removeRemainder(data){
    return this.http.post(data, this.removeRemainderUri).pipe(
      tap(()=>{
        this._refresh$.next();
      })
      );
  }

  getLabels(): Observable<any>{
    return this.http.get(this.getLabelUri);
  }

  addLabel(data){
    return this.http.post(data, this.addLabelUri).pipe(
      tap(()=>{
        this._refresh$.next();
      })
    );
  }

}

