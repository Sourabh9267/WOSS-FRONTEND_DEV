import { Component } from '@angular/core';
import { ButtonComponent } from '../components/button-component/button-component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
// import { ButtonComponent } from '../components/button/button';

@Component({
  selector: 'app-header-component',
  imports: [ButtonComponent,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss'
})
export class HeaderComponent {

}
