import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pin-component',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.css','../../addnotetoggle/addnotetoggle.component.css']
})
export class PinComponent implements OnInit {

  @Input() isPined:boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
