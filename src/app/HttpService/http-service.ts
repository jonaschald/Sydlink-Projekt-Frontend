import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './environment';

@Service()
export class HttpService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  test() {
    return this.http.get(`${this.apiUrl}/weatherforecast`);
  }
}
