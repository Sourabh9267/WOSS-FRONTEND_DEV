import { Component } from '@angular/core';
import { ButtonComponent } from '../components/button-component/button-component';
import { HeaderComponent } from '../header-component/header-component';
import {  NgxTypedJsModule } from 'ngx-typed-js';

@Component({
  selector: 'app-hero-component',
  imports: [ButtonComponent,HeaderComponent,NgxTypedJsModule],
  templateUrl: './hero-component.html',
  styleUrl: './hero-component.scss'
})
export class HeroComponent {
typedStrings: string[] = [
    'Perfect Car&nbsp;',
    'Luxury Ride&nbsp;',
    'Weekend Wheels&nbsp;',
    'Road Trip Partner&nbsp;',
    'City Cruiser&nbsp;',
    'Adventure SUV&nbsp;',
    'Business Sedan&nbsp;'
  ];
}
