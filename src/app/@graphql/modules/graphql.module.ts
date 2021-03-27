import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, ApolloLink, InMemoryCache } from '@apollo/client';
import { HttpLink } from 'apollo-angular/http';
import { onError } from '@apollo/client/link/error';

const uri = 'http://localhost:2002/graphql'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      console.log('GraphQL Errors', graphQLErrors);
    }

    if (networkError) {
      console.log('Network Errors', networkError);
    }
  });
  const link = ApolloLink.from([errorLink, httpLink.create({ uri })]);
  return {
    link,
    cache: new InMemoryCache(),
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
