import { Component, OnInit } from '@angular/core';
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

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.builder.group({
      searchbar: ''
    })
  }

  get searchbar(){
    return this.searchForm.get('searchbar')
  }
  
  reset(){
    this.searchForm.setValue({"searchbar":" "});
  }

}
