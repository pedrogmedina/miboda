import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlojamientosComponent } from './alojamientos/alojamientos.component';
import { InicioComponent } from './inicio/inicio.component';
import { LegalComponent } from './legal/legal.component';
import { ContactComponent } from '../contact/contact.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'alojamientos', component: AlojamientosComponent },
  { path: 'aviso-legal', component: LegalComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
