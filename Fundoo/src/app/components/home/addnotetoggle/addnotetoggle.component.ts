import { Component, HostListener, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesService } from 'src/app/services/notes/notes.service';

@Component({
  selector: 'app-addnotetoggle',
  templateUrl: './addnotetoggle.component.html',
  styleUrls: ['./addnotetoggle.component.css']
})
export class AddnotetoggleComponent implements OnInit{

  noteForm: FormGroup;
  isFocused : boolean = false;
  undo:string[];
  constructor(private builder : FormBuilder
    , private _service: NotesService
    , private snackBar: MatSnackBar) { }
  
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

  undoAction(){
    console.log(this.undo,"asdasdasas")
  }

  get isPined(){
    return this.noteForm.get('isPined').value;
  }

  get title(){
    return this.noteForm.get('title').value;
  }

  get description(){
    return this.noteForm.get('description').value;
  }


  togglePin(){
    this.noteForm.get('isPined').setValue(!this.isPined); 
    console.log(this.isPined)
  }

  submit(){
    this._service.addNote(this.noteForm.value).subscribe(
      response=>console.log("sadasd"),
      error=>this.snackBar.open('Empty note cannot be saved', '', {
        duration: 2000,
      })
    );
  }
}
