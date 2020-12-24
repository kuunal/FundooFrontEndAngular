import { AfterViewInit, Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import {AddnotesComponent} from './addnotes/addnotes.component';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() isSidebarClicked:boolean;
  @Input() isMenuClicked:boolean;

  constructor(private router: Router
    , private route: ActivatedRoute) { }
 
  ngOnInit(): void {
  }


changeRoute(route){
  console.log(route)
  switch(route){
    case "archive":
      this.router.navigate([route], {relativeTo : this.route})
      break;
    case "delete":
      this.router.navigate([route], {relativeTo : this.route})
      case "notes":
    default:
      this.router.navigate([route], {relativeTo : this.route})
  }
}

}
