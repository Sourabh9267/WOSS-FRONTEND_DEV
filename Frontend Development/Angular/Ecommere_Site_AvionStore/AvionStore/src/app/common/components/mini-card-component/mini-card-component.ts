import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mini-card-component',
  imports: [CommonModule],
  templateUrl: './mini-card-component.html',
  styleUrl: './mini-card-component.scss'
})
export class MiniCardComponent {

@Input() iconPath:string = "";
@Input() title: string = "";
@Input() variant: string = "";
customClasses="";

ngOnInit(){

  if(this.variant==="noOutline"){
    this.customClasses="noOutline";
  }
}

}
