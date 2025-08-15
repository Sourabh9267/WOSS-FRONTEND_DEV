import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './common/header-component/header-component';
import { HeroComponent } from './common/hero-component/hero-component';
import { CategoriesComponent } from './common/categories-component/categories-component';
import { FeaturedComponent } from './common/featured-component/featured-component';
import { PromoSectionComponent } from './common/promo-section-component/promo-section-component';
// import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,HeroComponent,CategoriesComponent,FeaturedComponent,PromoSectionComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'AvionStore';
}
