import { Component } from '@angular/core';
import { CustomBtnComponent } from '../custom-btn/custom-btn.component';

@Component({
  selector: 'app-hero-section',
  imports: [CustomBtnComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {

}
