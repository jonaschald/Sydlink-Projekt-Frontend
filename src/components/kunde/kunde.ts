import {Component, signal} from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpService } from '../../HttpService/http-service';
@Component({
  selector: 'app-kunde',
  imports: [RouterLink, DatePipe],
  templateUrl: './kunde.html',
  styleUrl: './kunde.css',
})
export class Kunde {

  supportsager = signal<ISag[]>([]);

  email = '';

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.email = localStorage.getItem('email') ?? '';

    this.loadSupportCases()
  }

  loadSupportCases() {
    this.httpService.getSupportCases().subscribe({
      next: (data: any) => {
        this.supportsager.set(data);
      },
      error: (error: any) => {
        console.error('Fejl ved hentning af supportsager:', error);
      },
    });
  }
}
