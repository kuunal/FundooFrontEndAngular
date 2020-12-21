import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  name:string="Kunal Deshmukh";
  email:string="kunaldeshmukh2503@gmail.com";

  constructor() { }

  ngOnInit(): void {
  }

}
