import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-archieve-component',
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.css','../../addnotetoggle/addnotetoggle.component.css']
})
export class ArchieveComponent implements OnInit {

  @Input() isArchived:boolean;
  constructor() { }
  
  ngOnInit(): void {
  }

}
