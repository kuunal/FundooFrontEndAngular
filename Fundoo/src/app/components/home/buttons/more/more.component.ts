import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesService } from 'src/app/services/notes/notes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-more-component',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css','../../addnotetoggle/addnotetoggle.component.css']
})
export class MoreComponent implements OnInit {


  @Input() note;
  @Input() labels:any;
  isFound: boolean = true;
  foundCounter: number = 0;
  userId: string = localStorage.getItem("id")
  labelIsClicked: boolean= false

  labelForm: FormGroup;

  constructor(private _service: NotesService
    , private builder : FormBuilder
    ,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.labelForm = this.builder.group({
      label:['',]
    })
  }

  
  get label(){
    return this.labelForm.get("label").value;
  }

  delete(){
    this._service.deleteNotes({isDeleted: true, noteIdList:[this.note.id]})
    .subscribe(
      response=>{
        
      },
      error=>this.snackBar.open('Error deleting note','',{
        duration: 2000,
      })
    )
  }

  createLabel(){
    let data = {
      isDeleted: false,
      label: this.label,
      userId: "5fdefec2d5d3de001e5d8441"
    }
    this._service.addLabel(data).subscribe(
      response=>{},
      error=>this.snackBar.open('Error!', '', {
        duration: 2000,
      })
    )
  }

  checkIfLabelExists(label){
    return this.note.noteLabels && !!this.note.noteLabels.find(note=>note.id === label.id)
  }

  addLabelToNote(label){
    alert(label.label)
  }

  addLabel(){
    this._service.addLabel({isDeleted: false,
      label: this.label,
      userId: this.userId}).subscribe(
      response=>{},
      error=>this.snackBar.open(error, '', {
        duration: 2000,
      })
    );
  }

  checkLabelSearched(labelItem, index){
    if(index === 0){
      this.isFound = false;
    }
    if (labelItem.label.includes(this.label)){
      this.isFound = true
    }
    return labelItem.label.includes(this.label);
  }
}
