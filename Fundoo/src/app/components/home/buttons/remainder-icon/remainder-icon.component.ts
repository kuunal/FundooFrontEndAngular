import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-remainder-icon-component',
  templateUrl: './remainder-icon.component.html',
  styleUrls: ['./remainder-icon.component.css','../../addnotetoggle/addnotetoggle.component.css']
})
export class RemainderIconComponent implements OnInit {

  date;
  minDate=new Date()
  @Output() dateEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    this.dateEvent.emit(this.date);
  }

}
