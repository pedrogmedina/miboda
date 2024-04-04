import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRoutingModule } from './modules/home/home-routing.module';
import { ContactRoutingModule } from './modules/contact/contact-routing.module';

const routes: Routes = [
  { path: '', loadChildren: () => import ('./modules/home/home-routing.module').then(m => m.HomeRoutingModule) },
  { path: 'contacto', loadChildren: () => import ('./modules/contact/contact-routing.module').then(m => m.ContactRoutingModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ContactRoutingModule, HomeRoutingModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
