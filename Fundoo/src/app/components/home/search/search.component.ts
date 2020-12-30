import { stringify } from '@angular/compiler/src/util';
import { Component, NgZone, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SharedDataServiceService } from 'src/app/services/data/shared-data-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchFilter: Function;

  constructor(
    private ngZone: NgZone,
    private snackBar: MatSnackBar,
    private _dataService: SharedDataServiceService
  ) {}

  ngOnInit(): void {
    this.searchFilter = function (searchValue) {
      return function (note) {
        return Object.keys(note).some(function (key) {
          if (typeof note[key] === 'string')
            return note[key].toString().includes(searchValue);
          else if (note[key] instanceof Array) {
            return note[key].forEach((element) => {
              return Object.keys(element).some(function (innerKey) {
                if (element[innerKey] === 'eqw') {
                  console.log(
                    element[innerKey].toString().includes(searchValue)
                  );
                }
                return element[innerKey].toString().includes(searchValue);
              });
            });
          }
        });
      };
    };
  }
}
