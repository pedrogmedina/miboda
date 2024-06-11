import { Component, OnInit } from '@angular/core';
import { Alojamiento } from 'src/app/interfaces/alojamiento';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-alojamientos',
  templateUrl: './alojamientos.component.html',
  styleUrls: ['./alojamientos.component.scss']
})
export class AlojamientosComponent implements OnInit {

  public bannerPage: string = './assets/images/banner/soto.jpg';
  public alojamientosList: Alojamiento[] = [];

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
   this.getAlojamientos();
  }

  public getAlojamientos(): void {
   this.contentService.getAlojamientosContent().subscribe(alojamientos => {
    this.alojamientosList = alojamientos;
    console.log(this.alojamientosList);
   })
  }
}
