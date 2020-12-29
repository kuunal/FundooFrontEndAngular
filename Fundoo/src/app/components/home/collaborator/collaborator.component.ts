import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.css'],
})
export class CollaboratorComponent implements OnInit {
  @Input() collaborator;

  constructor() {}
  ngOnInit() {}
}
