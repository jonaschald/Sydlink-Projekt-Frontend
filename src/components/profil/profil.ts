import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profil',
  imports: [RouterLink, FormsModule],
  templateUrl: './profil.html',
  styleUrl: './profil.css',
})

export class Profil {
  navn = '';
  email = '';
  nytKodeord = '';
  gentagKodeord = '';

  constructor() {
    this.email = localStorage.getItem('email') || '';
    this.navn = localStorage.getItem('name') || '';
  }

  gemProfil() {
    if (this.nytKodeord !== this.gentagKodeord) {
      alert('Kodeord matcher ikke');
      return;
    }

    localStorage.setItem('name', this.navn);
    localStorage.setItem('email', this.email);

    alert('Profil gemt');
  }

  private router = inject(Router);
  tilbage() {
    if(this.router.url.startsWith('/kunde')) {
      this.router.navigate(['/kunde']);
    } else if (this.router.url.startsWith('/medarbejder')) {
      this.router.navigate(['/medarbejder']);
    }
  }
}
