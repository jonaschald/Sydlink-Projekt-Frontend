import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpService } from '../../HttpService/http-service';

@Component({
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  selector: 'app-svar-medarbejder',
  styleUrl: './svar-medarbejder.css',
  templateUrl: './svar-medarbejder.html',
})
export class SvarMedarbejder {

  constructor(private httpService: HttpService) {}

  loadBeskeder(): void {
    this.httpService.getBeskeder().subscribe({
      next: (data) => {
        console.log('Beskeder:', data);
      },
      error: (error) => {
        console.error('Fejl ved hentning af beskeder:', error);
      }
    });
  }
}
