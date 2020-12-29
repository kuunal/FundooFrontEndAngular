import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesService } from 'src/app/services/notes/notes.service';

@Component({
  selector: 'app-collaborators',
  templateUrl: './collaborators.component.html',
  styleUrls: ['./collaborators.component.css'],
})
export class CollaboratorsComponent implements OnInit {
  collaborators = [
    {
      name: 'f0rest',
      isOwner: 'true',
      email: 'f0rest@gmail.com',
    },
    {
      name: 'Get_Right',
      isOwner: 'true',
      email: 'GetRight@gmail.com',
    },
  ];
  collaboratorForm: FormGroup;
  availableCollaborators: any;

  constructor(
    private _builder: FormBuilder,
    private _service: NotesService,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.collaboratorForm = this._builder.group({
      collaboratorEmail: this._builder.array([this._builder.control('')]),
    });
  }

  get collaboratorEmail() {
    return this.collaboratorForm.get('collaboratorEmail') as FormArray;
  }

  addcollaboratorEmail() {
    if (this.getLastInputValue())
      this.collaboratorEmail.push(this._builder.control(''));
  }

  getLastInputValue() {
    return this.collaboratorEmail.controls[this.collaboratorEmail.length - 1]
      .value;
  }

  getCollaborators() {
    this._service
      .getEmailForCollab({
        searchWord: this.getLastInputValue(),
      })
      .subscribe(
        (response) => {
          this.availableCollaborators = response['data'].details;
          console.log(this.availableCollaborators);
        },
        (error) =>
          this.snackBar.open('Error!', '', {
            duration: 2000,
          })
      );
  }
}
