import { Routes } from '@angular/router';
import { Login } from '../components/login/login';
import { Kunde } from '../components/kunde/kunde';
import { Medarbejder } from '../components/medarbejder/medarbejder';
import { Profil } from '../components/profil/profil';
import { MinSag } from '../components/min-sag/min-sag';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'kunde', component: Kunde },
  { path: 'medarbejder', component: Medarbejder },
  { path: 'profil', component: Profil }
];

