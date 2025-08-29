import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { ButtonComponent } from '../components/button-component/button-component';
import { filter } from 'rxjs/operators'; 

@Component({
  selector: 'app-header-component',
  imports: [ButtonComponent, RouterLink, RouterLinkActive, RouterOutlet, NgIf],
  templateUrl: './header-component.html',
  styleUrls: ['./header-component.scss']
})
export class HeaderComponent {
  isShowHeader = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd)) // 👈 type-safe
      .subscribe((event: NavigationEnd) => {
        this.isShowHeader = event.urlAfterRedirects !== '/signup';
      });
  }
}
