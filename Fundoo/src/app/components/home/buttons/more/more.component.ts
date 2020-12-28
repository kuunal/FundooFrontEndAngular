import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesService } from 'src/app/services/notes/notes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-more-component',
  templateUrl: './more.component.html',
  styleUrls: [
    './more.component.css',
    '../../addnotetoggle/addnotetoggle.component.css',
  ],
})
export class MoreComponent implements OnInit {
  @Input() noteLabels;
  @Input() labels: any;
  @Output() addNoteToLabelEvent = new EventEmitter();
  @Output() addLabelEvent = new EventEmitter();
  isFound: boolean = true;
  foundCounter: number = 0;
  userId: string = localStorage.getItem('id');
  labelIsClicked: boolean = false;
  @Output() deleteEvent = new EventEmitter();

  labelForm: FormGroup;

  constructor(
    private _service: NotesService,
    private builder: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.labelForm = this.builder.group({
      label: [''],
    });
  }

  get label() {
    return this.labelForm.get('label').value;
  }

  delete() {
    this.deleteEvent.emit('');
  }

  checkIfLabelExists(label) {
    return (
      this.noteLabels && !!this.noteLabels.find((note) => note.id === label.id)
    );
  }

  addLabelToNote(label) {
    this.addNoteToLabelEvent.emit(label);
  }

  addLabel() {
    this.addLabelEvent.emit(this.label);
  }

  checkLabelSearched(labelItem, index) {
    if (index === 0) {
      this.isFound = false;
    }
    if (labelItem.label.includes(this.label)) {
      this.isFound = true;
    }
    return labelItem.label.includes(this.label);
  }
}
