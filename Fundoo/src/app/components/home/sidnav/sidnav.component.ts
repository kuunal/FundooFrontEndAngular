import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidnav',
  templateUrl: './sidnav.component.html',
  styleUrls: ['./sidnav.component.css']
})
export class SidnavComponent implements OnInit {

  isOpen:boolean;
  @Input() isSidebarClicked:boolean;
  sidebarHoverClass:string = "sidebar-hover";
  sidebarClass:string = "sidebar";



  constructor() { }

  ngOnInit(): void {
  }

}
