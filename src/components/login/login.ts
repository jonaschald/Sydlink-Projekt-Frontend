import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  email = '';
  password = '';
  role = '';

  constructor(private router: Router) {}

  selectRole(role: string) {
    this.role = role;
  }

  login() {
    if (!this.email || !this.password) {
      alert('Udfyld e-mail og password');
      return;
    }

    if (!this.role) {
      alert('Vælg Kunde eller Medarbejder');
      return;
    }

    localStorage.setItem('email', this.email);
    localStorage.setItem('role', this.role);

    if (this.role === 'Kunde') {
      this.router.navigate(['/kunde']);
    } else if (this.role === 'Medarbejder') {
      this.router.navigate(['/medarbejder']);
    }
  }
}
