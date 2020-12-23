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
  isFocused: boolean = false;

  constructor(private router: Router
    , private route: ActivatedRoute) { }
 
  ngOnInit(): void {
  }

//   @HostListener('click',['$event']) onClick(event) {
//     if (this.isFocused && !document.getElementById('add-note-form').contains(event.target)){
//       this.isFocused = !this.isFocused;        
//     }else if (this.isFocused === false && document.getElementById('mini-add-note').contains(event.target)){
//       this.isFocused = !this.isFocused;
//     } 
// }

changeRoute(route){
  console.log(route)
  switch(route){
    case "archive":
      this.router.navigate([route], {relativeTo : this.route})
      break;
      case "notes":
    default:
      this.router.navigate([route], {relativeTo : this.route})
  }
}

}
