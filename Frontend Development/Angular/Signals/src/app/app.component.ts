import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  count = signal(0);

 
  doubleCount = computed(() => this.count() * 2);


  increment() {
    this.count.set(this.count() + 1);
  }
}
