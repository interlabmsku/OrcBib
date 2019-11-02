import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchBar = '';

  constructor() { }

  ngOnInit() {
  }

  isOrcidValid() {
    if (this.searchBar.length === 19) {
      return true;
    }
    return false;
  }

}
