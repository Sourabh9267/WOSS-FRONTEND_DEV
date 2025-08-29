import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgxTypedJsModule } from 'ngx-typed-js';

@Component({
  selector: 'app-not-found-page',
  imports: [RouterLink,NgxTypedJsModule],
  templateUrl: './not-found-page.html',
  styleUrl: './not-found-page.scss'
})
export class NotFoundPage {
 typedStrings: string[] = [
    'has taken a wrong turn.',
    'is off-roading somewhere else.',
    'hit a digital dead end.',
    'is not in our inventory.',
    'drove off the map.'
  ];
}
