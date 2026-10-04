import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-glemt-password',
  imports: [FormsModule],
  templateUrl: './glemt-password.html',
  styleUrl: './glemt-password.css',
})
export class GlemtPassword {
  email = '';
  nytKodeord = '';
  gentagKodeord = '';

  constructor(private router: Router) {}

  gemKodeord() {
    if (!this.email || !this.nytKodeord || !this.gentagKodeord) {
      alert('Udfyld alle felter');
      return;
    }

    if (this.nytKodeord !== this.gentagKodeord) {
      alert('Kodeordene er ikke ens');
      return;
    }

    localStorage.setItem('email', this.email);
    localStorage.setItem('password', this.nytKodeord);

    alert('Nyt kodeord er gemt');

    this.router.navigate(['/']);
  }

  tilbage() {
    this.router.navigate(['/']);
  }
}
