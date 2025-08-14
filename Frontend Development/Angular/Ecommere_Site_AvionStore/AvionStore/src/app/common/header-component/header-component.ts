import { Component } from '@angular/core';
import { ButtonComponent } from '../components/button-component/button-component';
// import { ButtonComponent } from '../components/button/button';

@Component({
  selector: 'app-header-component',
  imports: [ButtonComponent],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss'
})
export class HeaderComponent {

}
