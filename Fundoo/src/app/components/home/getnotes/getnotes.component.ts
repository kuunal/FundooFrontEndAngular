import { Component, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesService } from 'src/app/services/notes/notes.service';

@Component({
  selector: 'app-getnotes',
  templateUrl: './getnotes.component.html',
  styleUrls: ['./getnotes.component.css']
})
export class GetnotesComponent implements OnInit {

  @Input() componentIsDelete: boolean;
  @Input() filter: Function;
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
        .filter(this.filter)
        .reverse()
        console.log(this.notes)
        console.log(this.filter)
      },
      error=> this.snackBar.open('Error fetching notes!', '', {
        duration: 2000,
      })
    )
}

}
