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
    if (this.searchBar.match('[0-9Xx]{4}-[0-9Xx]{4}-[0-9Xx]{4}-[0-9Xx]{4}')) {
      return true;
    }
    return false;
  }

}
