import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PlanningComponent } from 'src/app/components/planning/planning.component';
import { BannerComponent } from 'src/app/components/banner/banner.component';

@NgModule({
  declarations: [
    HomeComponent,
    PlanningComponent,
    BannerComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
