import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PlanningComponent } from 'src/app/components/planning/planning.component';
import { JumbotronComponent } from 'src/app/components/jumbotron/jumbotron.component';
import { CardsComponent } from 'src/app/components/cards/cards.component';

@NgModule({
  declarations: [
    HomeComponent,
    PlanningComponent,
    JumbotronComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
