import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-close-component',
  templateUrl: './close.component.html',
  styleUrls: ['./close.component.css']
})
export class CloseComponent implements OnInit {

  @Output() closeEvent = new EventEmitter(); 

  constructor() { }

  ngOnInit(): void {
  }

  close(){
    this.closeEvent.emit("");
  }

}
