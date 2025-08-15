import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button-component/button-component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card-component',
  imports: [ButtonComponent,CommonModule],
  templateUrl: './product-card-component.html',
  styleUrl: './product-card-component.scss'
})
export class ProductCardComponent {

@Input() product_name:string ="";
@Input() product_detail_1:string ="";
@Input() product_detail_2:string ="";
@Input() product_detail_3:string ="";
@Input() product_price:string ="";
@Input() product_label:string ="";
@Input() product_img_path:string = "";




}
