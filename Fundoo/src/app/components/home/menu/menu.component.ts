import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Input() isMenuClicked: boolean;
  name: string = JSON.parse(localStorage.getItem('data')).name;
  email: string = JSON.parse(localStorage.getItem('data')).email;

  constructor() {}

  ngOnInit(): void {}
}
