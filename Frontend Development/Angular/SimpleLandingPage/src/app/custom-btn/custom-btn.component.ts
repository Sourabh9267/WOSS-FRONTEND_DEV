import { Component,input } from '@angular/core';

@Component({
  selector: 'app-custom-btn',
  imports: [],
  templateUrl: './custom-btn.component.html',
  styleUrl: './custom-btn.component.scss'
})
export class CustomBtnComponent {


btnText = input("Hii") ;
btnClass=input("btn-variant-1");

}
