import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataServiceService {
  isGridView: boolean = false;
  note: [];
  private newCollaboratorsEvent$ = new Subject<boolean>();

  constructor() {}

  setCollaboratorStatus(isSave) {
    this.newCollaboratorsEvent$.next(isSave);
  }

  getCollaboratorStatus() {
    return this.newCollaboratorsEvent$.asObservable();
  }
}
