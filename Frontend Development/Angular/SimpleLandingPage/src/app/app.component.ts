import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomHeaderComponent } from './custom-header/custom-header.component';
import { CustomBtnComponent } from './custom-btn/custom-btn.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { CompaniesSectionComponent } from './companies-section/companies-section.component';
import { FeaturesSectionComponent } from './features-section/features-section.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CustomHeaderComponent,HeroSectionComponent,CompaniesSectionComponent, FeaturesSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SimpleLandingPage';
}
