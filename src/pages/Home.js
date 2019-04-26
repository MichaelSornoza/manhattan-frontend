import React, { Component } from 'react';
import ProductsContainer from '../components/home/products/container/ProductsContainer';
import Header from '../components/layouts/container/Header';

import { Redirect } from 'react-router-dom';

import { MeQuery } from '../querys/MeQuery';

import { Query } from 'react-apollo';

class Home extends Component {
  componentDidMount() {}
  render() {
    return (
      <Query query={MeQuery}>
        {({ data, loading, error }) => {
          if (error) {
            return <h1 className="title">ERROR</h1>;
          }
          console.log(window.localStorage.getItem('token'));
          console.log(data);
          if (loading || !data.me) {
            return <h1 className="title">CARGANDO...</h1>;
          }
          return (
            <div className="home">
              <Header />
              <div className="columns">
                <div className="column">
                  <ProductsContainer />
                </div>
                <div className="column">Hola 2</div>
              </div>
              <style jsx>{`
                .home {
                  background-color: #3b425e;
                }
              `}</style>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Home;
