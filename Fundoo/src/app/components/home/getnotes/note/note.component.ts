import { Component, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as moment from 'moment';
import { NotesService } from 'src/app/services/notes/notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent implements OnInit {
  @Input() note: any;
  @Input() labels: any;
  @Input() isGridView: boolean;
  isFocused: boolean = false;

  public styles: any;

  constructor(private _service: NotesService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.styles = {
      backgroundColor: this.note.color,
      width: '70vw',
    };
  }

  addLabelToNote(label) {
    this._service.addLabelToNote({}, this.note.id, label).subscribe(
      (response) => {},
      (error) =>
        this.snackBar.open('Error!', '', {
          duration: 2000,
        })
    );
  }

  addLabel(label) {
    this._service
      .addLabel({ isDeleted: false, label: label, userId: this.note.userId })
      .subscribe(
        (response) => {},
        (error) =>
          this.snackBar.open(error, '', {
            duration: 2000,
          })
      );
  }

  changeColor(color) {
    this._service.setColor({ noteIdList: [this.note.id], color }).subscribe(
      (success) => (this.note.color = color),
      (error) =>
        this.snackBar.open('Error changing color!', '', {
          duration: 2000,
        })
    );
  }

  delete() {
    this._service
      .deleteNotes({ isDeleted: true, noteIdList: [this.note.id] })
      .subscribe(
        (response) => {},
        (error) =>
          this.snackBar.open('Error deleting note', '', {
            duration: 2000,
          })
      );
  }

  togglePin() {
    this._service
      .togglePin({ isPined: !this.note.isPined, noteIdList: [this.note.id] })
      .subscribe(
        (response) => console.log('success'),
        (error) =>
          this.snackBar.open('Error unpinning!', '', {
            duration: 2000,
          })
      );
  }

  toggleArchive() {
    this._service
      .toggleArchive({
        isArchived: !this.note.isPined,
        noteIdList: [this.note.id],
      })
      .subscribe(
        (response) => {},
        (error) =>
          this.snackBar.open('Error!', '', {
            duration: 2000,
          })
      );
  }

  changeDate(date) {
    this._service
      .updateDate({ reminder: date, noteIdList: [this.note.id] })
      .subscribe(
        (response) => {},
        (error) =>
          this.snackBar.open('Error!', '', {
            duration: 2000,
          })
      );
  }

  deletePermanently() {
    this._service
      .deleteNotesPermanent({ noteIdList: [this.note.id] })
      .subscribe(
        (response) => {},
        (error) =>
          this.snackBar.open('Error!', '', {
            duration: 2000,
          })
      );
  }

  recover() {
    this._service
      .restoreNote({ isDeleted: false, noteIdList: [this.note.id] })
      .subscribe(
        (response) => {},
        (error) =>
          this.snackBar.open('Error!', '', {
            duration: 2000,
          })
      );
  }

  removeRemainder() {
    this._service.removeRemainder({ noteIdList: [this.note.id] }).subscribe(
      (response) => {},
      (error) =>
        this.snackBar.open('Error!', '', {
          duration: 2000,
        })
    );
  }

  removeLabel(label) {
    this._service.removeLabelToNote({}, this.note.id, label.id).subscribe(
      (response) => {},
      (error) =>
        this.snackBar.open('Error!', '', {
          duration: 2000,
        })
    );
  }
}
