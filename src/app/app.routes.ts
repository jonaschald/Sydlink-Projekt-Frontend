import { Routes } from '@angular/router';
import { Login } from '../components/login/login';
import { Kunde } from '../components/kunde/kunde';
import { Medarbejder } from '../components/medarbejder/medarbejder';
import { Support } from '../components/support/support';
import { SvarKunde } from '../components/svar-kunde/svar-kunde';
import { Profil } from '../components/profil/profil';
import { MinSag } from '../components/min-sag/min-sag';
import { OpretSag } from '../components/opret-sag/opret-sag';
import { SvarMedarbejder } from '../components/svar-medarbejder/svar-medarbejder';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'kunde', component: Kunde },
  { path: 'medarbejder', component: Medarbejder },
  { path: 'profil', component: Profil },
  { path: 'minsag', component: MinSag },
  { path: 'opretsag', component: OpretSag },
  { path: 'profil', component: Profil },
  { path: 'support', component: Support },
  { path: 'svar', component: SvarKunde },
  { path: 'medarbejder/svar', component: SvarMedarbejder },
];

