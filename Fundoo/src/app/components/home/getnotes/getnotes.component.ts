import { Component, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SharedDataServiceService } from 'src/app/services/data/shared-data-service.service';
import { NotesService } from 'src/app/services/notes/notes.service';

@Component({
  selector: 'app-getnotes',
  templateUrl: './getnotes.component.html',
  styleUrls: ['./getnotes.component.css'],
})
export class GetnotesComponent implements OnInit {
  @Input() componentIsDelete: boolean;
  @Input() filter;
  unpinned: any;
  notes: [];
  searchValue: string = '';
  labels: any;
  constructor(
    private _service: NotesService,
    private snackBar: MatSnackBar,
    private _dataService: SharedDataServiceService
  ) {}

  ngOnInit(): void {
    console.log(this.searchValue);
    this.setSearchval();
    this._service.getRefreshedData().subscribe(() => this.getNotes());
    this._service.getRefreshedLabels().subscribe(() => this.getLabel());
    this.getNotes();
    this.getLabel();
  }

  setSearchval() {
    this._dataService.getSearchKeyword().subscribe(
      (response) => {
        this.searchValue = response;
        this.getNotes();
      },
      (error) =>
        this.snackBar.open('Error', '', {
          duration: 2000,
        })
    );
  }

  get isGridView() {
    return this._dataService.isGridView;
  }

  private getNotes() {
    this._service.getNote().subscribe(
      (response) => {
        this.notes = response.data.data
          .filter(
            this.filter.type ? this.filter.func(this.searchValue) : this.filter
          )
          .filter((note) => note.isPined)
          .reverse();
        this.unpinned = response.data.data
          .filter(
            this.filter.type ? this.filter.func(this.searchValue) : this.filter
          )
          .filter((note) => !note.isPined)
          .reverse();
      },
      (error) =>
        this.snackBar.open('Error fetching notes!', '', {
          duration: 2000,
        })
    );
  }

  private getLabel() {
    this._service.getLabels().subscribe(
      (response) => (this.labels = response.data.details),
      (error) =>
        this.snackBar.open('Error!', '', {
          duration: 2000,
        })
    );
  }
}
