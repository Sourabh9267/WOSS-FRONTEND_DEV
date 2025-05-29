import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductcardComponent } from './productcard/productcard.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ProductcardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'product-card';
}
