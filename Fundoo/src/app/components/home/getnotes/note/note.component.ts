import { Component, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesService } from 'src/app/services/notes/notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input() note:any;
  isFocused: boolean = false;

  constructor(private _service: NotesService
    ,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
}

  changeColor(data){
    console.log("sadsadsadassd")
    this._service.setColor(data).subscribe(
      success=>this.note.color = data.color ,
      error=> this.snackBar.open('Error changing color!', '', {
        duration: 2000,
      })
    )
  }

  togglePin(){
    this._service.togglePin({isPined: !this.note.isPined, noteIdList:[this.note.id]})
    .subscribe(
      response=>console.log("success"),
      error=> this.snackBar.open('Error unpinning!', '', {
        duration: 2000,
      })
    ) 

  }

}
