import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesService } from 'src/app/services/notes/notes.service';

@Component({
  selector: 'app-more-component',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css','../../addnotetoggle/addnotetoggle.component.css']
})
export class MoreComponent implements OnInit {

  @Input() noteId;
  constructor(private _service: NotesService
    ,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  delete(){
    this._service.deleteNotes({isDeleted: true, noteIdList:[this.noteId]})
    .subscribe(
      response=>{
        
      },
      error=>this.snackBar.open('Error deleting note','',{
        duration: 2000,
      })
    )
  }

}
