import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addnotes',
  templateUrl: './addnotes.component.html',
  styleUrls: ['./addnotes.component.css']
})
export class AddnotesComponent implements OnInit {

  checked = true;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  

  constructor() { }

  ngOnInit(): void {
  }

}
