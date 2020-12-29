import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SharedDataServiceService } from 'src/app/services/data/shared-data-service.service';
import { NotesService } from 'src/app/services/notes/notes.service';

@Component({
  selector: 'app-collaborators',
  templateUrl: './collaborators.component.html',
  styleUrls: ['./collaborators.component.css'],
})
export class CollaboratorsComponent implements OnInit {
  collaborators: any;
  userData = JSON.parse(localStorage.getItem('data'));
  collaboratorsWithOwner: any;
  collaboratorForm: FormGroup;
  availableCollaborators: any;

  constructor(
    private _builder: FormBuilder,
    private _service: NotesService,
    public snackBar: MatSnackBar,
    private _sharedservice: SharedDataServiceService
  ) {}

  ngOnInit(): void {
    this.collaboratorForm = this._builder.group({
      collaboratorEmail: this._builder.array([this._builder.control('')]),
    });
    this.collaborators = this._sharedservice.collaboratorList;
    this.collaboratorsWithOwner = [
      {
        email: this.userData.email,
        firstName: this.userData.firstName,
        lastName: this.userData.lastName,
        role: 'owner',
      },
      ...this.collaborators,
    ];
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
