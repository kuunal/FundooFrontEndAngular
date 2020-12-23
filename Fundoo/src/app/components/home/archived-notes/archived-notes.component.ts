import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesService } from 'src/app/services/notes/notes.service';

@Component({
  selector: 'app-archived-notes',
  templateUrl: '../getnotes/getnotes.component.html',
  styleUrls: ['../getnotes/getnotes.component.css']
})
export class ArchivedNotesComponent implements OnInit {

  notes:[];

  constructor(private _service: NotesService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this._service.getRefreshedData().subscribe(()=>this.getNotes())
    this.getNotes()
   
  }
  private getNotes(){
    this._service.getNote().subscribe(
      response=>{this.notes = response.data
        .data.sort((note, nextNote)=>note.isPined - nextNote.isPined)
        .filter(note=>note.isDeleted!=true && note.isArchived===true)
        .reverse()
        console.log(this.notes)
      },
      error=> this.snackBar.open('Error fetching notes!', '', {
        duration: 2000,
      })
    )
}

}

