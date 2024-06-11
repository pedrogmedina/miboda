import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    ContactusComponent,
    BannerComponent,
    DialogComponent
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  exports: [
    BannerComponent,
    ContactusComponent,
    DialogComponent
  ]
})
export class SharedModule { }
