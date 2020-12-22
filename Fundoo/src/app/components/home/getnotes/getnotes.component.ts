import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesService } from 'src/app/services/notes/notes.service';

@Component({
  selector: 'app-getnotes',
  templateUrl: './getnotes.component.html',
  styleUrls: ['./getnotes.component.css']
})
export class GetnotesComponent implements OnInit {

  notes:[];

  constructor(private _service: NotesService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this._service.getRefreshedData().subscribe(()=>this.getNotes())
    this.getNotes()
   
  }
  private getNotes(){
    this._service.getNote().subscribe(
      response=>{this.notes = response.data.data
        console.log(response.data)
      },
      error=> this.snackBar.open('Error fetching notes!', '', {
        duration: 2000,
      })
    )
}

}
