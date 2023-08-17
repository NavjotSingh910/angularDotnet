import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-house-location',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section class="listing">
    <img class="listing-photo" [src]="housingLocationInhouse.photo" alt="Exterior photo of {{housingLocationInhouse.name}}">
    <h2 class="listing-heading">{{ housingLocationInhouse.name }}</h2>
    <p class="listing-location">{{ housingLocationInhouse.city}}, {{housingLocationInhouse.state }}</p>
  </section>
  `,

  styleUrls: ['./house-location.component.css']
})
export class HouseLocationComponent {
    @Input() housingLocationInhouse!:HousingLocation;
}
