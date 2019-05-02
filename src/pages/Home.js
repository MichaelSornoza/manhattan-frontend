import React, { Component } from 'react';
import ProductsContainer from '../components/home/products/container/ProductsContainer';
import Header from '../components/layouts/container/Header';
import { Redirect } from 'react-router-dom';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const ME_QUERY = gql`
  {
    me {
      fullname
    }
  }
`;

class Home extends Component {
  componentDidMount() {
    localStorage.getItem('token');
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
              <h1 className="title">CARGANDO...</h1>
            ) : (
              <div className="home">
                {console.log(data)}
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
