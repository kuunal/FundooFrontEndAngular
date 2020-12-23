import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paint-component',
  templateUrl: './paint.component.html',
  styleUrls: ['./paint.component.css','../../addnotetoggle/addnotetoggle.component.css']
})
export class PaintComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  open(trigger){
    trigger.openMenu();
  }

}
