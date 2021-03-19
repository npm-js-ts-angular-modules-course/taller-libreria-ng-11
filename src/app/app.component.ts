import { Component } from '@angular/core';
import { ICardItem } from 'projects/cards/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  elements: Array<ICardItem> = [
    {
      title: 'Titulo 1',
      description: 'Descripción 1',
      image: 'https://picsum.photos/500/300/?image=12',
    },
    {
      title: 'Titulo 2',
      description: 'Descripción 2',
      image: 'https://picsum.photos/500/300/?image=78',
    },
    {
      title: 'Titulo 3',
      description: 'Descripción 3',
      image: 'https://picsum.photos/500/300/?image=32',
    },
    {
      title: 'Titulo 4',
      description: 'Descripción 4',
      image: 'https://picsum.photos/500/300/?image=34',
    },
    {
      title: 'Titulo 5',
      description: 'Descripción 5',
      image: 'https://picsum.photos/500/300/?image=121',
    },
    {
      title: 'Titulo 6',
      description: 'Descripción 6',
      image: 'https://picsum.photos/500/300/?image=1',
    },
  ];
}
