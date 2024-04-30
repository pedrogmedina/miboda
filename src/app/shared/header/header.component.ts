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
  isBottom: boolean = false;

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

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (window.scrollY <= 100) {
      this.isBottom = true;
    } else {
      this.isBottom = false;
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
}
