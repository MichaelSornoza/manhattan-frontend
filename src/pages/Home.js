import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import ProductsContainer from '../components/home/products/container/ProductsContainer';
import Header from '../components/layouts/container/Header';
import ScreenLoader from '../components/load-screen/ScreenLoader';
const ME_QUERY = gql`
  {
    me {
      fullname
    }
  }
`;

class Home extends Component {
  componentDidMount() {
    console.log(window.localStorage.getItem('token'));
  }

  render() {
    return (
      <Query query={ME_QUERY}>
        {({ data, loading, error }) => (
          <div>
            {error && (
              <div>
                <Redirect to="/login" />
              </div>
            )}
            {loading || !data ? (
              <ScreenLoader isActive={true} />
            ) : (
              <div className="home">
                <Header />
                <div className="columns">
                  <div className="column">
                    <ProductsContainer />
                  </div>
                  <div className="column">Hola 2</div>
                </div>
              </div>
            )}
          </div>
        )}
      </Query>
    );
  }
}

export default Home;
