import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { DocumentNode } from 'graphql';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private apollo: Apollo) { }
  // tslint:disable-next-line: typedef
  public get(query: DocumentNode, variables: object = {}, context: object = {}, cache: boolean = true) {
    return this.apollo.watchQuery({
      query,
      variables,
      context,
      fetchPolicy: (cache) ? 'network-only' : 'no-cache'
    }).valueChanges.pipe(map((result) => {
      return result.data;
    }));
  }

  protected set(mutation: DocumentNode, variables: object = {}, context: object = {}): unknown {
    return this.apollo.mutate({
      mutation,
      variables,
      context
    }).pipe(
      map((result) => {
        return result.data;
      })
    );
  }
  protected subscription(subscription: DocumentNode, variables: object = {}): unknown {
    return this.apollo.subscribe({
      query: subscription,
      variables
    }).pipe(
      map((result) => {
        return result.data;
      })
    );
  }
}
