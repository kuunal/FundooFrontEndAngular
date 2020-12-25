import { Component, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as moment from 'moment';
import { NotesService } from 'src/app/services/notes/notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input() note:any;
  isFocused: boolean = false;
  remainderObject:any;
  isTimeFocused: boolean;

  constructor(private _service: NotesService
    ,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  calculateRemainder(remainder){
    let momentObject = moment(remainder);
    let date = new Date();

    if (momentObject.isAfter(moment(date))){
      this.remainderObject = { isExpired: false, 
                              remainingTime: momentObject.fromNow(),
                              data: momentObject.format("MMM Do YY HH:MM:SS")};
      }
    else
      this.remainderObject = { isExpired: true, 
                              remainingTime: momentObject.fromNow(),
                              data: momentObject.format("MMM Do YY HH:MM:SS")};
  }

  changeColor(color){
    console.log("sadsadsadassd")
    this._service.setColor({ noteIdList: [this.note.id] , color}).subscribe(
      success=>this.note.color = color ,
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

  toggleArchive(){
    this._service.toggleArchive({isArchived: !this.note.isPined, noteIdList:[this.note.id]})
    .subscribe(
      response=>{},
      error=> this.snackBar.open('Error!', '', {
        duration: 2000,
      })
    )
  }

  changeDate(date){
    this._service.updateDate({reminder: date, noteIdList:[this.note.id]})
    .subscribe(
      response=>{},
      error=> this.snackBar.open('Error!', '', {
        duration: 2000,
      })
    )
  }

  deletePermanently(){
    this._service.deleteNotesPermanent({noteIdList:[this.note.id]})
    .subscribe(
      response=>{},
      error=> this.snackBar.open('Error!', '', {
        duration: 2000,
      })
    )
  }

  recover(){
    this._service.restoreNote({isDeleted: false, noteIdList:[this.note.id]})
    .subscribe(
      response=>{},
      error=> this.snackBar.open('Error!', '', {
        duration: 2000,
      })
    )
  }

  
  removeRemainder(){
    console.log("ASdasd")
    this._service.removeRemainder({noteIdList:[this.note.id]})
    .subscribe(
      response=>{},
      error=> this.snackBar.open('Error!', '', {
        duration: 2000,
      })
    )
  }

}
