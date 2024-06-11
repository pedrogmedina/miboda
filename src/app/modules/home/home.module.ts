import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PlanningComponent } from 'src/app/components/planning/planning.component';
import { JumbotronComponent } from 'src/app/components/jumbotron/jumbotron.component';
import { CardsComponent } from 'src/app/components/cards/cards.component';
import { AlojamientosComponent } from './alojamientos/alojamientos.component';
import { InicioComponent } from './inicio/inicio.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FaqComponent } from 'src/app/components/faq/faq.component';
import { LegalComponent } from './legal/legal.component';

@NgModule({
  declarations: [
    HomeComponent,
    PlanningComponent,
    JumbotronComponent,
    CardsComponent,
    AlojamientosComponent,
    InicioComponent,
    FaqComponent,
    LegalComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    HomeRoutingModule,
    SharedModule,
  ]
})
export class HomeModule {
  @ViewChild(MatAccordion)
  accordion!: MatAccordion;
}
