import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio';
import { PacientesComponent } from './pages/pacientes/pacientes';
import { EnfermerosComponent } from './pages/enfermeros/enfermeros';
import { CitasComponent } from './pages/citas/citas';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'pacientes', component: PacientesComponent },
  { path: 'enfermeros', component: EnfermerosComponent },
  { path: 'citas', component: CitasComponent },
  { path: '**', redirectTo: 'inicio' }
];
