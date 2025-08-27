import { Component } from '@angular/core';
import { ButtonComponent } from '../components/button-component/button-component';
import { MatTabsModule } from '@angular/material/tabs';
import { ProductCardComponent } from '../components/product-card-component/product-card-component';
import { CommonModule } from '@angular/common';
import { PaginationButtonsComponent } from '../components/pagination-buttons-component/pagination-buttons-component';

interface product_data{
  id:number,
  product_name:string,
  product_img_path:string,
  product_detail_1:string,
  product_detail_2:string,
  product_detail_3:string,
  product_price:string,
  product_label:string
}

@Component({
  selector: 'app-recently-added-section-component',
 imports: [ButtonComponent,MatTabsModule,ProductCardComponent,CommonModule,PaginationButtonsComponent],
  templateUrl: './recently-added-section-component.html',
  styleUrl: './recently-added-section-component.scss'
})
export class RecentlyAddedSectionComponent {

product_data_array: product_data[] = [
  {
    id: 1,
    product_name: 'Ford-Transit 2025',
    product_img_path: 'products_images/cars/car1.png',
    product_detail_1: '2500 Miles',
    product_detail_2: 'Diesel',
    product_detail_3: 'Automatic',
    product_price: '$22,340',
    product_label: 'Low Mileage'
  },
  {
    id: 2,
    product_name: 'New GLC – 2023',
    product_img_path: 'products_images/cars/car2.png',
    product_detail_1: '50 Miles',
    product_detail_2: 'Petrol',
    product_detail_3: 'Automatic',
    product_price: '$95,000',
    product_label: 'Great Price'
  },
  {
    id: 3,
    product_name: 'Audi A6 3.5 – New',
    product_img_path: 'products_images/cars/car3.png',
    product_detail_1: '100 Miles',
    product_detail_2: 'Petrol',
    product_detail_3: 'Automatic',
    product_price: '$58,000',
    product_label: 'Most Rated'
  },
  {
    id: 4,
    product_name: 'Corolla Altis – 2023',
    product_img_path: 'products_images/cars/car4.png',
    product_detail_1: '15000 Miles',
    product_detail_2: 'Petrol',
    product_detail_3: 'CVT',
    product_price: '$45,000',
    product_label: 'Best Seller'
  }
];



}
