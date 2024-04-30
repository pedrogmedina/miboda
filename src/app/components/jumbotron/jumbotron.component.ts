import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss'],
  animations: [
    trigger( 'visibleHidden', [
      state(
        'visible',
        style({
          transform: 'translateX(100%)scale(1)',
          opacity: 1,
        }),
      ),
      transition('* => visible',animate('230ms ease-in-out')),
    ]),
  ]
})
export class JumbotronComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
