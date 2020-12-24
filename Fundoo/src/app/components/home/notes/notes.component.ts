import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  isFocused: boolean = false;
  notesFilter = function(note){
    return note.isDeleted!=true && note.isArchived!=true
  }

  constructor() { }

  ngOnInit(): void {
  }
  
  @HostListener('click',['$event']) onClick(event) {
    if (this.isFocused && !document.getElementById('add-note-form').contains(event.target)){
      this.isFocused = !this.isFocused;        
    }else if (this.isFocused === false && document.getElementById('mini-add-note').contains(event.target)){
      this.isFocused = !this.isFocused;
    } 
}

}
