import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuMobile: boolean | undefined;
  mobileDevice: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(window.screen.width >= 768) {
      this.menuMobile = false;
      this.mobileDevice = false;
    } else {
      this.menuMobile = true;
      this.mobileDevice = true;
    }
    console.log(window.screen.width, this.menuMobile)
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
