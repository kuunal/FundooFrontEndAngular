import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesService } from 'src/app/services/notes/notes.service';

@Component({
  selector: 'app-paint-component',
  templateUrl: './paint.component.html',
  styleUrls: ['./paint.component.css','../../addnotetoggle/addnotetoggle.component.css']
})
export class PaintComponent implements OnInit {

  @Input() noteId; 
  @Output() colorChanged:any = new EventEmitter();
  constructor(private _service: NotesService
    , private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  open(trigger){
    trigger.openMenu();
  }

  getColor(color:string){
    console.log(color)
    this._service.setColor({ noteIdList: [this.noteId] , color}).subscribe(
      success=> this.colorChanged.emit(color),
      error=> this.snackBar.open('Error changing color!', '', {
        duration: 2000,
      })
    )
  }

}
