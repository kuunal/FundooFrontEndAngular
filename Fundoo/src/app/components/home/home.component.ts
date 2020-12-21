import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import {AddnotesComponent} from './addnotes/addnotes.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() isSidebarClicked:boolean;
  @Input() isMenuClicked:boolean;

  constructor() { }
 
  ngOnInit(): void {
  }

}
