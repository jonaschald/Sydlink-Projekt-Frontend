import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpService } from '../../HttpService/http-service';

@Component({
  imports: [FormsModule, NgOptimizedImage, RouterLink],
  selector: 'app-support',
  styleUrl: './support.css',
  templateUrl: './support.html',
})
export class Support {
  private httpService = inject(HttpService);

  navn = '';
  email = '';
  titel = '';
  sagsnummer = '';
  beskrivelse = '';

  send() {
    if (!this.navn || !this.email || !this.titel || !this.sagsnummer || !this.beskrivelse) {
      alert('Udfyld alle felter');
      return;
    }

    const besked = {
      titel: this.titel,
      sagsNummer: Number(this.sagsnummer),
      beskeden: this.beskrivelse,
      kundeId: null,
      medarbejderId: null,
    };

    this.httpService.createBesked(besked).subscribe({
      next: (response) => {
        console.log('Besked sendt:', response);
        alert('Beskeden er sendt');

        this.navn = '';
        this.email = '';
        this.titel = '';
        this.sagsnummer = '';
        this.beskrivelse = '';
      },
      error: (error) => {
        console.error('Fejl ved sending af besked:', error);
        alert('Beskeden kunne ikke sendes');
      },
    });
  }
}
