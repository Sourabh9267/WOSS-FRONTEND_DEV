import { Component,input } from '@angular/core';
import { CustomBtnComponent } from '../custom-btn/custom-btn.component';
import { CustomCardComponent } from '../custom-card/custom-card.component';

@Component({
  selector: 'app-features-section',
  imports: [CustomBtnComponent,CustomCardComponent],
  templateUrl: './features-section.component.html',
  styleUrl: './features-section.component.scss'
})
export class FeaturesSectionComponent {



}
