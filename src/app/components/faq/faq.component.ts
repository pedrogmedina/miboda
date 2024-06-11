import { Component, OnInit } from '@angular/core';
import { Card } from '../cards/card';
import { Faq } from 'src/app/interfaces/faq';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})


export class FaqComponent implements OnInit {

  public questionsList: Faq[];

  constructor() {
    this.questionsList = [
      { 
        pregunta: '¿Cómo puedo contactar con Isabel y Pedro?',
        respuesta: 'Puedes enviarnos un mensaje a través de nuestro formulario web que encontrarás un poco más abajo. También puedes enviarnos un correo electrónico a <a href="mailto:hola@bodaisabelpedro.es">hola@bodaisabelpedro.es</a>'
      },
      { 
        pregunta: '¿Existe parking gratuito cerca del casco histórico?',
        respuesta: 'Existen dos grandes aparcamientos gratuitos. <br>1. Parking recinto ferial: <a href="https://maps.app.goo.gl/pfWByiLNEuwxYXmw5" target="_blank" rel="noopener">Ver en maps</a> <br>2. Parking Pico del Obisco: <a href="https://maps.app.goo.gl/Rc1XnCR9jVMjcN5EA" target="_blank" rel="noopener">Ver en maps</a>'
      },
      { 
        pregunta: '¿Cuál va a ser el itinerario de los autobuses?',
        respuesta: 'Por determinar...'
      },
      { 
        pregunta: '¿Hay código de vestimenta?',
        respuesta: 'Queremos seguir el protocolo habitual para las bodas católicas. <br> Aconsejamos llevar algo de abrigo para los momentos de exterior si el tiempo nos lo permite. ¡No os preocupéis! nos vamos a pasar frío...'
      },
      { 
        pregunta: '¿Puedo desplazarme en taxi o Uber a la finca?',
        respuesta: 'Si, tanto taxi como servicio vtc llegan a la finca, aunque pondremos servicio de autobuses para todo el mundo.'
      },
      { 
        pregunta: '¿Se van a repartir zapatos planos durante el festejo?',
        respuesta: 'Nos alegra anunciar que sí, creemos que es algo indispensable en las bodas y seguro que hasta la novia terminará pidiendo unos. ¡No tendréis escusas para dejar de bailar!'
      },
    ];
  }

  ngOnInit() {
  }

}
