import { ICardItem } from './../../interfaces/card.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'tng-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent {
  @Input() cardItem?: ICardItem;
}
