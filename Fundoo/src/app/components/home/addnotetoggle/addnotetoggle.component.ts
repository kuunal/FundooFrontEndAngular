import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesService } from 'src/app/services/notes/notes.service';

@Component({
  selector: 'app-addnotetoggle',
  templateUrl: './addnotetoggle.component.html',
  styleUrls: ['./addnotetoggle.component.css']
})
export class AddnotetoggleComponent implements OnInit {

  noteForm: FormGroup;
  isFocused : boolean = false;
  constructor(private builder : FormBuilder, private _service: NotesService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.noteForm = this.builder.group({
      title:'',
      description:'',
      isPined:false,
      color: '#FFFFFF',
      isArchived: false,
      labelIdList: [],
      reminder: "",
      collaberators: []
    })
  }

  submit(){
    console.log(this.noteForm.value)
    if(this.noteForm['title'] == null 
    && this.noteForm['description'] == null)
    {
      this.toggleFocus()
      return
    } 
    this._service.addNote(this.noteForm.value).subscribe(
      response=>this.toggleFocus(),
      error=>this.snackBar.open('Error adding notes', '', {
        duration: 2000,
      })
    );
  }

  toggleFocus(){
    this.isFocused= !this.isFocused 
  }

}
