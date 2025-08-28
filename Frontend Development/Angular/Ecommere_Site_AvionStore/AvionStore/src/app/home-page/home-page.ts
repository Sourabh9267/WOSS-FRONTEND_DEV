import { Component } from '@angular/core';
import { HeaderComponent } from '../common/header-component/header-component';
import { HeroComponent } from '../common/hero-component/hero-component';
import { CategoriesComponent } from '../common/categories-component/categories-component';
import { FeaturedComponent } from '../common/featured-component/featured-component';
import { PromoSectionComponent } from '../common/promo-section-component/promo-section-component';
import { StatsSectionComponent } from '../common/stats-section-component/stats-section-component';
import { RecentlyAddedSectionComponent } from '../common/recently-added-section-component/recently-added-section-component';
import { SubscribeEmailComponent } from '../common/subscribe-email-component/subscribe-email-component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [HeaderComponent,HeroComponent, CategoriesComponent, FeaturedComponent, PromoSectionComponent,StatsSectionComponent,RecentlyAddedSectionComponent,SubscribeEmailComponent,RouterOutlet,RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {

}
