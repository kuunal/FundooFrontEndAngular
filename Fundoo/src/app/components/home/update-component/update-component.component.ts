import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.css'],
})
export class UpdateComponentComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public note: any) {}

  ngOnInit(): void {
    console.log(this.note);
  }
}
