import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remainder',
  templateUrl: './remainder.component.html',
  styleUrls: ['./remainder.component.css']
})
export class RemainderComponent implements OnInit {

  isFocused: boolean = false;
  notesFilter = function(note){
    return note.isDeleted!=true && note.isArchived!=true && note.reminder.length != 0
  }

  constructor() { }

  ngOnInit(): void {
  }

}
