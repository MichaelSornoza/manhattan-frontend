import React, { Component } from 'react';
import ProductsContainer from '../components/home/products/container/ProductsContainer';
import Header from '../components/layouts/container/Header';

class Home extends Component {
  render() {
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
  }
}

export default Home;
