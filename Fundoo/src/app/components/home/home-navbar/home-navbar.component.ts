import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.css']
})
export class HomeNavbarComponent implements OnInit {
  value = ' ';
  searchForm: FormGroup;
  isFocus:boolean=false;
  @Output() public sidebarClickedEvent = new EventEmitter();
   isSidebarClicked:boolean=false;


  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.builder.group({
      searchbar: ''
    })
  }

  sidebarClicked(){
    this.isSidebarClicked = !this.isSidebarClicked;
    this.sidebarClickedEvent.emit(this.isSidebarClicked);
  }

  get searchbar(){
    return this.searchForm.get('searchbar')
  }
  
  reset(){
    this.searchForm.setValue({"searchbar":" "});
  }

}
