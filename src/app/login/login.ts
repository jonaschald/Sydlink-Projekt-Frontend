import { Component } from '@angular/core';
import {HttpService} from '../HttpService/http-service';

@Component({
  imports: [],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  private httpService: HttpService = new HttpService();

  ngOnInit() {
    console.log(this.httpService.test());
  }
}
