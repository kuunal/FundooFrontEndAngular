import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-pin-component',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.css','../../addnotetoggle/addnotetoggle.component.css']
})
export class PinComponent implements OnInit {


  @Input() isPined:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
