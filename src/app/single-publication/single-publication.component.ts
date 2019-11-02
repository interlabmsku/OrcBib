import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-single-publication',
  templateUrl: './single-publication.component.html',
  styleUrls: ['./single-publication.component.css']
})
export class SinglePublicationComponent implements OnInit {

  @Input() publicationInformations: any;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
