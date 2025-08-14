import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { NgModel } from '@angular/forms';
CommonModule
@Component({
  selector: 'app-button-component',
  imports: [CommonModule],
  templateUrl: './button-component.html',
  styleUrl: './button-component.scss'
})
export class ButtonComponent {

  @Input() customBtnText: string = "Demo";
  @Input() customBtnVariant: string = "PrimaryBtn";
  @Input() iconPath: string = ""; // <-- Path to icon in assets
  @Input() btnHasIcon: boolean = false;
  @Input() btnIconPosition: 'left' | 'right' = 'left';

  customClasses: string = '';

  ngOnInit() {
    if (this.customBtnVariant === 'PrimaryBtn') {
      this.customClasses = 'btn btn-custom-primary';
    } else if (this.customBtnVariant === 'SecondaryBtn') {
      this.customClasses = 'btn btn-custom-secondary';
    }
    else if(this.customBtnVariant === 'SecondaryBtn-NoOutline'){
      this.customClasses = 'btn btn-custom-secondary-no-outline';
    }
    else if(this.customBtnVariant === 'SecondaryBtn-NoOutline-Dark'){
      this.customClasses = 'btn btn-custom-secondary-no-outline-dark';
    }
  }

}
