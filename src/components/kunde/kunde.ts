import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpService } from '../../app/HttpService/http-service';
@Component({
  selector: 'app-kunde',
  imports: [RouterLink, DatePipe],
  templateUrl: './kunde.html',
  styleUrl: './kunde.css',
})
export class Kunde {

  supportsager: any[] = [];

  email = '';

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.email = localStorage.getItem('email') ?? '';
  }

  loadSupportCases() {
    this.httpService.getSupportCases().subscribe({
      next: (data: any) => {
        this.supportsager = data;
      },
      error: (error: any) => {
        console.error('Fejl ved hentning af supportsager:', error);
      },
    });
  }
}
