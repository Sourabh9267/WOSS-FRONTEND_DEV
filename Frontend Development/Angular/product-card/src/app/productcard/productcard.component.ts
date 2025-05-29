import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.scss'],
  imports: [CommonModule]
})
export class ProductcardComponent {
  renderData: any[] = [];

  async fetchData() {
    try {
      const rawdata = await fetch('https://fakestoreapi.com/products');
      const data = await rawdata.json();
      this.renderData = data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
}
