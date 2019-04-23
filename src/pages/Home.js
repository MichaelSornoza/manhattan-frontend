import React, { Component } from 'react';
import ProductsContainer from '../components/home/products/container/ProductsContainer';
import Header from '../components/layouts/Header';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="columns">
          <div className="column">
            <ProductsContainer />
          </div>
          <div className="column">Hola 2</div>
        </div>
      </div>
    );
  }
}

export default Home;
