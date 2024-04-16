import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailchimpService {
  private apiKey = 'df04364c1f8909d7a606f556b21ed6d3-us18';

  constructor(
    private http: HttpClient ) { }

  public submitConfirmacionForm(body: any) {
    const url = `https://us18.api.mailchimp.com/3.0/lists/a72c06699d/members`;
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `apikey ${this.apiKey}`);
    headers = headers.append('Access-Control-Allow-Origin', '*');

    return this.http.post(url, body, { headers: headers });
  }
}
