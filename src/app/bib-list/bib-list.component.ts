import {Component, Input, OnInit, OnChanges} from '@angular/core';
import { OrcidService } from '../orcid.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-bib-list',
  templateUrl: './bib-list.component.html',
  styleUrls: ['./bib-list.component.css']
})
export class BibListComponent implements OnInit, OnChanges {

  @Input() orcid = '';
  listOfWorks: Array<number> = [];
  contentToShow: Array<any> = [];

  constructor(private orcidService: OrcidService, private route: ActivatedRoute) { }

  ngOnInit() {
    if(this.route.snapshot.paramMap.get("orcid") != null){
      this.orcid = this.route.snapshot.paramMap.get("orcid")
      this.ngOnChanges()
    }
  }


  ngOnChanges() {
    this.listOfWorks = [];
    this.contentToShow = [];
    this.orcidService.getAllWorks(this.orcid).subscribe((data: any[]) => {
      for (const i of data['group'] ) {
        this.listOfWorks.push(i['work-summary'][0]['put-code']);
      }
      let allWorks = '';
      for (const y of this.listOfWorks) {
        allWorks = allWorks + y + ',';
      }
      this.orcidService.getCitations(this.orcid, allWorks).subscribe((bibs: any[]) => {
        for (const i of bibs['bulk']) {
          this.contentToShow.push(i['work']);
        }
      });
    });
  }

}
