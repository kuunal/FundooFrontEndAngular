import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesService } from 'src/app/services/notes/notes.service';

@Component({
  selector: 'app-archived-notes',
  templateUrl: './archived-notes.component.html',
  styleUrls: []
})
export class ArchivedNotesComponent implements OnInit {

  notes:[];
  isFocused:boolean = false;
  notesFilter: Function= function(note){
    return note.isDeleted!=true && note.isArchived === true
  }

  constructor() { }

  ngOnInit(): void {
  }

}

