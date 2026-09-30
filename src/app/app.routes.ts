import { Routes } from '@angular/router';
import { Login } from '../components/login/login';
import { Kunde } from '../components/kunde/kunde';
import { Medarbejder } from '../components/medarbejder/medarbejder';
import {Support} from '../components/support/support';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'kunde', component: Kunde },
  { path: 'medarbejder', component: Medarbejder },
  { path: 'support', component: Support }
];

