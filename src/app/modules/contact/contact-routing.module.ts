import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { SuccessComponent } from './success/success.component';
import { ContactComponent } from './contact.component';

const routes: Routes = [
  { path: 'contacto', component: ContactComponent },
  { path: 'contacto/confirmacion', component: FormComponent },
  { path: 'contacto/confirmacion/success', component: SuccessComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
