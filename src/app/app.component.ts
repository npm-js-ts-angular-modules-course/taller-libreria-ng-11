import { ApiService } from './@graphql/services/api.service';
import { Component, OnInit } from '@angular/core';
import { ICardItem } from 'projects/cards/src/public-api';
import gql from 'graphql-tag';

export const USERS_LIST_QUERY = gql`
    query usersList ($include: Boolean!, $page: Int, $itemsPage: Int, $active: ActiveFilterEnum){
        users(page: $page, itemsPage: $itemsPage, active: $active) {
            status
            message
            users {
                ...UserObject
            }
        }
    }
    fragment UserObject on User {
      id
      name
      lastname
      email
      registerDate @include(if: $include)
      birthday @include(if: $include)
      role
      active
      stripeCustomer
    }
`;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
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
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.get(
      USERS_LIST_QUERY,
      {include: true}
    ).subscribe(result => console.log(result));
  }
}
