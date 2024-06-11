import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger( 'visibleHidden', [
      state(
        'visible',
        style({
          transform: 'translateY(0%)scale(1)',
          opacity: 1,
        }),
      ),
      transition('* => visible',animate('500ms ease-out')),
    ]),
  ]
})
export class HeaderComponent implements OnInit {
  menuMobile: boolean | undefined;
  mobileDevice: boolean = false;
  isHomePage: boolean = false;
  eventDate = new Date('2024-12-07T12:00:00');
  eventDateEnd = new Date('2024-12-08T01:00:00');

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = (event.url === '/');
      }
    });
  }

  ngOnInit(): void {
    if(window.screen.width >= 768) {
      this.menuMobile = false;
      this.mobileDevice = false;
    } else {
      this.menuMobile = true;
      this.mobileDevice = true;
    }
  }


  public ToggleMenuMobile() {
    this.menuMobile = !this.menuMobile;
  }

  public NavigateTo(url: string) {
    this.router.navigateByUrl(url);
    if(this.mobileDevice) {
      this.menuMobile = !this.menuMobile;
    }
  }

  public downloadICS() {
    const startDate = this.eventDate.toISOString().replace(/-|:|\.\d+/g, '');
    const endDate = new Date(this.eventDateEnd.getTime()).toISOString().replace(/-|:|\.\d+/g, '');

    const icsContent = `
    BEGIN:VCALENDAR
    VERSION:2.0
    PRODID:-//Bodaisabelpedro//WeddingEventScheduler//ES
    BEGIN:VEVENT
    UID:${this.generateUID()}
    DTSTAMP:${new Date().toISOString().replace(/-|:|\.\d+/g, '')}
    DTSTART:${startDate}
    DTEND:${endDate}
    SUMMARY:Evento Boda Isabel y Pedro
    DESCRIPTION:Boda de Isabel y Pedro, el 07 de diciembre de 2024 en Santa Maria la Mayor (Alcala de Henares).
    LOCATION:Alcala de Henares, Madrid
    END:VEVENT
    END:VCALENDAR`.trim();
    debugger
    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'evento-boda-isapedro.ics';
    a.click();
    URL.revokeObjectURL(url);
  }

  private generateUID(): string {
    return 'uid-' + new Date().getTime() + '@bodaisabelpedro.es';
}
}
