import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuMobile: boolean | undefined;
  mobileDevice: boolean = false;
  isHomePage: boolean = false;

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
}
