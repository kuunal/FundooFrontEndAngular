import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-add-note-body',
  templateUrl: './add-note-body.component.html',
  styleUrls: ['./add-note-body.component.css'],
})
export class AddNoteBodyComponent implements OnInit {
  @Input() note;
  @Input() remainders;
  remainderObject: any;
  isTimeFocused: boolean;
  @Output() removeRemainderEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  calculateRemainder(remainder) {
    let momentObject = moment(remainder);
    let date = new Date();

    if (momentObject.isAfter(moment(date))) {
      this.remainderObject = {
        isExpired: false,
        remainingTime: momentObject.fromNow(),
        data: momentObject.format('MMM Do YY HH:MM:SS'),
      };
    } else
      this.remainderObject = {
        isExpired: true,
        remainingTime: momentObject.fromNow(),
        data: momentObject.format('MMM Do YY HH:MM:SS'),
      };
  }

  checkValid(remainder) {
    return moment(remainder).isValid();
  }

  removeRemainder() {
    this.removeRemainderEvent.emit('');
  }
}
