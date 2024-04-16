import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PlanningComponent } from 'src/app/components/planning/planning.component';
import { JumbotronComponent } from 'src/app/components/jumbotron/jumbotron.component';

@NgModule({
  declarations: [
    HomeComponent,
    PlanningComponent,
    JumbotronComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
