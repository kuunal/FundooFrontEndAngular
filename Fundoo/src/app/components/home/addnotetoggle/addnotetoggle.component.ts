import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotesService } from 'src/app/services/notes/notes.service';

@Component({
  selector: 'app-addnotetoggle',
  templateUrl: './addnotetoggle.component.html',
  styleUrls: ['./addnotetoggle.component.css']
})
export class AddnotetoggleComponent implements OnInit {

  noteForm: FormGroup;
  isFocused : boolean = false;
  constructor(private builder : FormBuilder, private _service: NotesService) { }

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
    this._service.addNote(this.noteForm.value).subscribe(
      response=>this.isFocused=true,
      error=>console.log(error)
      
    );
  }

}
