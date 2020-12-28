import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesService } from 'src/app/services/notes/notes.service';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.css'],
})
export class LabelsComponent implements OnInit {
  @Input() labels;
  isFocused: boolean;
  @Input() noteLabels;
  @Output() labelRemoveEvent = new EventEmitter();

  constructor(private _service: NotesService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    console.log(this.noteLabels);
  }
}
