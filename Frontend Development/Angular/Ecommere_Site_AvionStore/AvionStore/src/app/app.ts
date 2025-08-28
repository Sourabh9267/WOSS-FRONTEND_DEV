import { Component } from '@angular/core';
import { Layout } from './layout/layout';
// import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  imports: [Layout],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'AvionStore';
}
