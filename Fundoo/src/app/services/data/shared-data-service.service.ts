import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedDataServiceService {
  isGridView: boolean = false;

  constructor() {}
}
