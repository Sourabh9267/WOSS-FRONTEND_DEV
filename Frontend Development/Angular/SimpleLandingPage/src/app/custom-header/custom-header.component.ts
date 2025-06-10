import { Component } from '@angular/core';
import { CustomBtnComponent } from '../custom-btn/custom-btn.component';

@Component({
  selector: 'app-custom-header',
  imports: [CustomBtnComponent],
  templateUrl: './custom-header.component.html',
  styleUrl: './custom-header.component.scss'
})
export class CustomHeaderComponent {

}
