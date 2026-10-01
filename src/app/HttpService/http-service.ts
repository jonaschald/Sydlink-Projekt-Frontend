import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private http = inject(HttpClient);

  private apiUrl = environment.apiUrl;

  test() {
    return this.http.get(`${this.apiUrl}/weatherforecast`);
  }

  createSupportCase(supportCase: any) {
    return this.http.post(`${this.apiUrl}/api/supportcases`, supportCase);
  }

  getSupportCases() {
    return this.http.get(`${this.apiUrl}/api/supportcases`);
  }
}
