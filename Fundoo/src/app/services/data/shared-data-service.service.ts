import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataServiceService {
  isGridView: boolean = false;
  note: any;
  private newCollaboratorsEvent$ = new Subject<boolean>();
  private searchEvent$ = new BehaviorSubject<string>('');
  private addCollaboratorsEvent$ = new Subject<boolean>();

  constructor() {}

  searchKeyword(data) {
    this.searchEvent$.next(data);
  }

  getSearchKeyword() {
    return this.searchEvent$.asObservable();
  }

  setCollaboratorStatus(isSave) {
    this.newCollaboratorsEvent$.next(isSave);
  }

  getCollaboratorStatus() {
    return this.newCollaboratorsEvent$.asObservable();
  }

  setaddCollaborator(collaborator) {
    this.addCollaboratorsEvent$.next(collaborator);
  }

  getCollaborator() {
    return this.addCollaboratorsEvent$.asObservable();
  }
}
