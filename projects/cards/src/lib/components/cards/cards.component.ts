import { Component, Input } from '@angular/core';
import { ICardItem } from 'projects/cards/src/public-api';

@Component({
  selector: 'tng-cards',
  template: `
    <p>Hola estamos en el taller de librería Angular con Anartz Mugika</p>
    <ul class="cards">
      <li class="cards_item" *ngFor="let item of cardItems">
        <tng-card-item [cardItem]="item"></tng-card-item>
      </li>
    </ul>
  `,
  styles: [],
})
export class CardsComponent {
  @Input() cardItems: Array<ICardItem> = [];
}
