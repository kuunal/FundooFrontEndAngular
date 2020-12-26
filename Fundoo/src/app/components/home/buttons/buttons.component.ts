import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  @Input() note;
  remainderObject: { isExpired: boolean; remainingTime: string; data: string; };
  isTimeFocused: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

  calculateRemainder(remainder){
    let momentObject = moment(remainder);
    let date = new Date();

    if (momentObject.isAfter(moment(date))){
      this.remainderObject = { isExpired: false, 
                              remainingTime: momentObject.fromNow(),
                              data: momentObject.format("MMM Do YY HH:MM:SS")};
      }
    else
      this.remainderObject = { isExpired: true, 
                              remainingTime: momentObject.fromNow(),
                              data: momentObject.format("MMM Do YY HH:MM:SS")};
  }

}