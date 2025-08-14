import { Component } from '@angular/core';
import { ButtonComponent } from '../components/button-component/button-component';
import { MiniCardComponent } from '../components/mini-card-component/mini-card-component';
import { CommonModule } from '@angular/common';

interface MiniCard {
  iconPath: string;
  title: string;
}

@Component({
  selector: 'app-categories-component',
  imports: [ButtonComponent,MiniCardComponent,CommonModule],
  templateUrl: './categories-component.html',
  styleUrl: './categories-component.scss'
})


export class CategoriesComponent {

car_type_category_data: MiniCard[] = [
  {
    iconPath: "icons/cars_types/SVG.svg",
    title: "suv"
  },
  {
    iconPath: "icons/cars_types/SVG-1.svg",
    title: "Sedan"
  },
  {
    iconPath: "icons/cars_types/SVG-2.svg",
    title: "Hatchback"
  },
  {
    iconPath: "icons/cars_types/SVG-3.svg",
    title: "Coupe"
  },
  {
    iconPath: "icons/cars_types/SVG-4.svg",
    title: "Hybrid"
  },
  {
    iconPath: "icons/cars_types/SVG-5.svg",
    title: "Convertible"
  },
  {
    iconPath: "icons/cars_types/SVG-6.svg",
    title: "Van"
  },
  {
    iconPath: "icons/cars_types/SVG-7.svg",
    title: "Truck"
  },
  {
    iconPath: "icons/cars_types/SVG-8.svg",
    title: "Electric"
  }
];


// Brand Wise Data


car_brands_data: MiniCard[] = [
  {
    iconPath: "icons/cars_brands/brand1.jpg.svg",
    title: "Audi"
  },
  {
    iconPath: "icons/cars_brands/brand2.jpg.svg",
    title: "BMW"
  },
  {
    iconPath: "icons/cars_brands/brand3.jpg.svg",
    title: "Ford"
  },
  {
    iconPath: "icons/cars_brands/brand4.jpg.svg",
    title: "Mercedes"
  },
  {
    iconPath: "icons/cars_brands/brand5.jpg.svg",
    title: "Peugeot"
  },
  {
    iconPath: "icons/cars_brands/brand6.jpg.svg",
    title: "Volkswagen"
  },
  {
    iconPath: "icons/cars_brands/brand7.jpg.svg",
    title: "Bentley"
  },
  {
    iconPath: "icons/cars_brands/brand8.jpg.svg",
    title: "Nissan"
  },
  {
    iconPath: "icons/cars_brands/brand9.jpg.svg", 
    title: "Jeep"
  },
  {
    iconPath: "icons/cars_brands/brand10.jpg.svg",
    title: "Skoda"
  }
];



}
