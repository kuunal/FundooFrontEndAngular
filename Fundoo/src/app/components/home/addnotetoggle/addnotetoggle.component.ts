import { ArrayType } from '@angular/compiler';
import { EventEmitter } from '@angular/core';
import {
  Component,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SharedDataServiceService } from 'src/app/services/data/shared-data-service.service';
import { NotesService } from 'src/app/services/notes/notes.service';
import { CollaboratorsComponent } from '../collaborators/collaborators.component';

@Component({
  selector: 'app-addnotetoggle',
  templateUrl: './addnotetoggle.component.html',
  styleUrls: ['./addnotetoggle.component.css'],
})
export class AddnotetoggleComponent implements OnInit {
  noteForm: FormGroup;
  isFocused: boolean = false;
  isArchieved: boolean = false;
  undo: string[];
  color: string = 'white';
  labels: any;
  labelsArray = [];
  collaboratorsArray = [];

  colorStyle = {
    'background-color': 'white',
  };
  @Output() closeEvent = new EventEmitter();

  constructor(
    private builder: FormBuilder,
    private _service: NotesService,
    private snackBar: MatSnackBar,
    private _sharedservice: SharedDataServiceService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.noteForm = this.builder.group({
      title: '',
      description: '',
      isPined: false,
      color: '#FFFFFF',
      isArchived: false,
      labelIdList: [],
      reminder: '',
      collaberators: [],
    });
    this._service.getRefreshedLabels().subscribe(() => this.getLabel());
    this.getLabel();

    this._sharedservice.getCollaborator().subscribe((response) => {
      this.collaboratorsArray.push(...response);
      this.noteForm.get('collaberators').setValue([...this.collaboratorsArray]);
    });
  }

  undoAction() {
    console.log(this.undo, 'asdasdasas');
  }

  get isPined() {
    return this.noteForm.get('isPined').value;
  }

  get title() {
    return this.noteForm.get('title').value;
  }

  get description() {
    return this.noteForm.get('description').value;
  }

  get reminder() {
    return [this.noteForm.get('reminder').value];
  }

  get labelIdList() {
    return <FormArray>this.noteForm.get('labelIdList').value;
  }

  set collaberators(data) {
    this.noteForm.get('collaberators').setValue([...data]);
  }

  togglePin() {
    this.noteForm.get('isPined').setValue(!this.isPined);
    console.log(this.isPined);
  }

  getRemainder(remainder) {
    this.noteForm.get('reminder').setValue(remainder);
  }

  submit() {
    this._service.addNote(this.noteForm.value).subscribe(
      (response) => console.log('sadasd'),
      (error) =>
        this.snackBar.open('Empty note cannot be saved', '', {
          duration: 2000,
        })
    );
  }

  toggleArchieve() {
    this.isArchieved = !this.isArchieved;
    this.noteForm.get('isArchived').setValue(this.isArchieved);
  }

  close() {
    this.submit();
    this.closeEvent.emit('');
  }

  changeColor(color) {
    this.noteForm.get('color').setValue(color);
    this.colorStyle['background-color'] = color;
    console.log(this.color);
  }

  private getLabel() {
    this._service.getLabels().subscribe(
      (response) => (this.labels = response.data.details),
      (error) =>
        this.snackBar.open('Error!', '', {
          duration: 2000,
        })
    );
  }

  addLabelToNote(label) {
    this.labelsArray.push(label);
    this.noteForm
      .get('labelIdList')
      .setValue(this.labelsArray.map((label) => label.id));
    console.log(this.labelsArray);
  }

  removeLabel(noteLabel) {
    this.labelsArray = this.labelsArray.filter(
      (label) => label.id !== noteLabel.id
    );
    this.noteForm
      .get('labelIdList')
      .setValue(this.labelsArray.map((label) => label.id));
  }

  removeRemainder() {
    this.noteForm.get('reminder').setValue('');
  }

  openDialog() {
    let note = {
      collaborators: this.collaboratorsArray,
    };
    this._sharedservice.note = note;
    const dialogRef = this.dialog.open(CollaboratorsComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result === 'true') {
        this._sharedservice.setCollaboratorStatus(true);
      }
    });
  }
}
