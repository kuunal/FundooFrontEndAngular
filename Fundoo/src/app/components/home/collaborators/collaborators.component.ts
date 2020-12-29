import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

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

  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {
    this.collaboratorForm = this.builder.group({
      collaboratorEmail: this.builder.array([this.builder.control('')]),
    });
  }

  get collaboratorEmail() {
    return this.collaboratorForm.get('collaboratorEmail') as FormArray;
  }

  addcollaboratorEmail() {
    console.log(
      this.collaboratorEmail.controls[
        this.collaboratorEmail.controls.length - 1
      ].value
    );
    if (
      this.collaboratorEmail.controls[this.collaboratorEmail.length - 1].value
    )
      this.collaboratorEmail.push(this.builder.control(''));
  }
}
