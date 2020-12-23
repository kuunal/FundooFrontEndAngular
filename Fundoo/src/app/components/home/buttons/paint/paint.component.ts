import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paint-component',
  templateUrl: './paint.component.html',
  styleUrls: ['./paint.component.css','../../addnotetoggle/addnotetoggle.component.css']
})
export class PaintComponent implements OnInit {

  @Input() noteId; 
  @Output() colorChanged:any = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  open(trigger){
    trigger.openMenu();
  }

  getColor(color:string){
    console.log(color)
    this.colorChanged.emit(color);
  }

}
