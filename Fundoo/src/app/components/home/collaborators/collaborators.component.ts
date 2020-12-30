import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SharedDataServiceService } from 'src/app/services/data/shared-data-service.service';
import { NotesService } from 'src/app/services/notes/notes.service';

@Component({
  selector: 'app-collaborators',
  templateUrl: './collaborators.component.html',
  styleUrls: ['./collaborators.component.css'],
})
export class CollaboratorsComponent implements OnInit {
  note: any;
  collaborators: any;
  userData = JSON.parse(localStorage.getItem('data'));
  collaboratorsWithOwner: any;
  collaboratorForm: FormGroup;
  availableCollaborators: any;

  constructor(
    private _builder: FormBuilder,
    private _service: NotesService,
    public snackBar: MatSnackBar,
    private _sharedservice: SharedDataServiceService,
    public dialogRef: MatDialogRef<CollaboratorsComponent>
  ) {}

  ngOnInit(): void {
    this.collaboratorForm = this._builder.group({
      collaboratorEmail: this._builder.array([this._builder.control('')]),
    });
    this.note = this._sharedservice.note;
    this.collaborators = this.note.collaborators;
    this.collaboratorsWithOwner = [
      {
        email: this.userData.email,
        firstName: this.userData.firstName,
        lastName: this.userData.lastName,
        role: 'owner',
      },
      ...this.collaborators,
    ];
    this._sharedservice.getCollaboratorStatus().subscribe(
      (response) => {
        this.addCollaborator();
      },
      (error) =>
        this.snackBar.open('Error!', '', {
          duration: 2000,
        })
    );
  }

  getOptionText(option) {
    return option.email;
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

  getCollaborators(email) {
    if (this.getLastInputValue())
      this._service
        .getEmailForCollab({
          searchWord: email,
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

  addCollaborator() {
    if (this.note) {
      for (let user of this.collaboratorEmail.controls) {
        this._service
          .addCollaborator({ ...user.value }, this.note.id)
          .subscribe(
            (response) => {},
            (error) =>
              this.snackBar.open('Error!', '', {
                duration: 2000,
              })
          );
      }
    }
  }
  save() {}
  cancel() {}

  removeCollaborator(userId) {
    this._service.removeCollaborator(this.note.id, userId).subscribe(
      (response) => {},
      (error) =>
        this.snackBar.open('Error!', '', {
          duration: 2000,
        })
    );
  }
}
