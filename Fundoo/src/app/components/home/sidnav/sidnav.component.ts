import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidnav',
  templateUrl: './sidnav.component.html',
  styleUrls: ['./sidnav.component.css']
})
export class SidnavComponent implements OnInit {

  isOpen:boolean;
  @Input() isSidebarClicked:boolean;
  @Output() route = new EventEmitter();
  sidebarHoverClass:string = "sidebar-hover";
  sidebarClass:string = "sidebar";



  constructor() { }

  ngOnInit(): void {
    }

    notesClicked(){
      this.route.emit("notes"); 
    }

    archiveClicked(){
      this.route.emit("archive"); 
    }

    delete(){
      this.route.emit("delete"); 
    }

    remainderClicked(){
      this.route.emit("remainder"); 
    }

}
