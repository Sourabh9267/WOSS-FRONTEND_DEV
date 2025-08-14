import { Component } from '@angular/core';
import { ButtonComponent } from '../components/button-component/button-component';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-featured-component',
  imports: [ButtonComponent,MatTabsModule],
  templateUrl: './featured-component.html',
  styleUrl: './featured-component.scss'
})
export class FeaturedComponent {

}
