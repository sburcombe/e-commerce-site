import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }
  componentDidMount(id) {
    fetch('/api/products.php' + id)
      .then(response => {
        return response.json();
      })
      .then(product => {
        return this.setState({
          product: product
        });
      })
      .catch(error => console.error('error: ', error));

  }
  render() {
    return (
      null
    );
  }
}

export default ProductDetails;
