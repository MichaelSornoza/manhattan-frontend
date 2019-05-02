import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  HttpLink
} from 'apollo-boost';

import { ApolloProvider } from 'react-apollo';

const API_URL = 'http://35.173.211.1:8000/graphql';

const httpLink = new HttpLink({
  uri: API_URL
});

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('token');

  operation.setContext({
    headers: {
      authorization: token ? `${token}` : ''
    }
  });

  return forward(operation);
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  connectToDevTools: true
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
