import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomePage } from '../home-page/home-page';
import { HeaderComponent } from '../common/header-component/header-component';

@Component({
  selector: 'app-layout',
  imports: [RouterLink,RouterOutlet,HomePage,HeaderComponent],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {

}
