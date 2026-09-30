import { Routes } from '@angular/router';
import { Login } from '../components/login/login';
import { Kunde } from '../components/kunde/kunde';
import { Medarbejder } from '../components/medarbejder/medarbejder';
import { OpretSag } from '../components/opret-sag/opret-sag';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'kunde', component: Kunde },
  { path: 'medarbejder', component: Medarbejder },
  // midlertidige knapper
  { path: 'opretSag', component: OpretSag },
];

