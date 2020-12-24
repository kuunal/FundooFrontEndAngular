import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  isFocused: boolean = false;
  notesFilter = function(note){
    return note.isDeleted===true
  }


  constructor() { }

  ngOnInit(): void {
  }


}
