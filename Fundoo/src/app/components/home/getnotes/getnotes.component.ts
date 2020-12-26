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
  labels:any;
  constructor(private _service: NotesService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this._service.getRefreshedData().subscribe(()=>this.getNotes())
    this._service.getRefreshedLabels().subscribe(()=>this.getLabel())
    this.getNotes()
    this.getLabel()
   
  }
  private getNotes(){
    this._service.getNote().subscribe(
      response=>{this.notes = response.data
        .data.sort((note, nextNote)=>note.isPined - nextNote.isPined)
        .filter(this.filter)
        .reverse()
      },
      error=> this.snackBar.open('Error fetching notes!', '', {
        duration: 2000,
      })
    )
}

private getLabel(){
  this._service.getLabels().subscribe(
    response=>this.labels = response.data.details,
    error=>this.snackBar.open('Error!', '', {
      duration: 2000,
    })
  )
}

}
