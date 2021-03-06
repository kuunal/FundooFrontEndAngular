import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedDataServiceService } from 'src/app/services/data/shared-data-service.service';

@Component({
  selector: 'app-home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.css'],
})
export class HomeNavbarComponent implements OnInit {
  value = ' ';
  searchForm: FormGroup;
  isFocus: boolean = false;
  isMenuClicked: boolean = false;
  searchInput: string;
  @Output() public sidebarClickedEvent = new EventEmitter();
  @Output() public menuClickedEvent = new EventEmitter();
  isSidebarClicked: boolean = false;
  name: string = JSON.parse(localStorage.getItem('data')).name;
  email: string = JSON.parse(localStorage.getItem('data')).email;

  constructor(
    private builder: FormBuilder,
    private router: Router,
    private _dataService: SharedDataServiceService
  ) {}

  ngOnInit(): void {
    this.searchForm = this.builder.group({
      searchbar: '',
    });
  }

  sidebarClicked() {
    this.isSidebarClicked = !this.isSidebarClicked;
    this.sidebarClickedEvent.emit(this.isSidebarClicked);
  }

  sidebarClose() {
    this.isSidebarClicked = false;
    this.sidebarClickedEvent.emit(this.isSidebarClicked);
  }

  get searchbar() {
    return this.searchForm.get('searchbar');
  }

  reset() {
    this.searchForm.setValue({ searchbar: null });
  }

  menuClicked() {
    this.isMenuClicked = !this.isMenuClicked;
    this.menuClickedEvent.emit(this.isMenuClicked);
  }

  gridViewClicked() {
    this._dataService.isGridView = !this._dataService.isGridView;
  }

  searchNotes() {
    this._dataService.searchKeyword(this.searchInput);
  }

  navigateToSearch() {
    this.router.navigate(['/search']);
  }

  logout() {
    localStorage.clear();
  }
}
