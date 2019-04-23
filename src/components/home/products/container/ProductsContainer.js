import React, { Component } from 'react';
import Image from '../../../../img.jpg';
class ProductsContainer extends Component {
  render() {
    return (
      <div>
        <img src={Image} alt="" />
      </div>
    );
  }
}

export default ProductsContainer;
