import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-label-items',
  templateUrl: './label-items.component.html',
  styleUrls: ['./label-items.component.css'],
})
export class LabelItemsComponent implements OnInit {
  isFocused: boolean;
  @Input() label;
  @Output() labelRemoveEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  removeLabel() {
    console.log(this.label);
    this.labelRemoveEvent.emit(this.label);
  }
}
