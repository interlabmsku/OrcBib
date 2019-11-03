import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BibListComponent } from './bib-list/bib-list.component';
import {SearchComponent} from './search/search.component';


const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'biblist', component: BibListComponent },
  { path: 'biblist/:orcid', component: BibListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
