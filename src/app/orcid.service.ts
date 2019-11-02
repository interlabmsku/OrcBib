import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrcidService {

  private REST_API_SERVER = 'https://pub.orcid.org/v3.0/';

  constructor(private httpClient: HttpClient) { }

  public getAllWorks(orcid: string) {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.httpClient.get(this.REST_API_SERVER + orcid + '/works/', {headers} );
  }

  public getCitations(orcid: string, pubcodes: string) {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.httpClient.get(this.REST_API_SERVER + orcid + '/works/' + pubcodes, {headers} );
  }
}
