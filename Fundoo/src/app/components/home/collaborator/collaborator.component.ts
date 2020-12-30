import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { from } from 'rxjs';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.css'],
})
export class CollaboratorComponent implements OnInit {
  @Input() collaborator;
  @Output() removeCollaboratorEvent = new EventEmitter();

  constructor() {}
  ngOnInit() {}

  removeCollaborator(userId) {
    alert('sadasd');
    this.removeCollaboratorEvent.emit(userId);
  }
}
