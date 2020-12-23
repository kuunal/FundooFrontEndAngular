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

  changeColor(color){
    this.note.color = color;    
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

  getColor(updatedColor:string){
    this.color=updatedColor;
    console.log(updatedColor)
  }

}
