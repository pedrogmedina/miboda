import { Component, OnInit } from '@angular/core';
import { Card } from './card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  public cardsContentList: Card[];

  constructor() { 
   this.cardsContentList = [
    {
      title: 'Lista de alojamientos',
      description: 'Queremos ayudarte a encontrar un lugar donde alojarte estos días. Te dejamos algunos de los hoteles donde creemos que te encontrarás como en casa.',
      image: './assets/images/cards/hoteles.jpg',
      path: '/alojamientos'
    },
    {
      title: 'La ceremonia',
      description: 'La parroquía Santa María la Mayor es una parroquia católica situada en la calle libreros de Alcalá de Henares. Nos abrirá sus puertas para oficiar a las 12:00h nuestra ceremonia católica de boda.',
      image: './assets/images/cards/iglesia.jpg'

    },
    {
      title: 'La celebración',
      description: 'El soto de monico se encuentra úbicado a pocos minutos de la ciudad, al cual nos desplazaremos una vez finalizada la ceremonia y donde comenzaremos la celebración con un cóctel de bienvenida.',
      image: './assets/images/cards/elsoto.jpg'
    },
   ];
  }

  ngOnInit(): void {}

}
