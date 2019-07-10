import React from 'react';
import Header from './header.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    fetch('/api/products.php')
      .then(response => {
        return (
          response.json()
        );
      })
      .then(products => {

        this.setState({
          products: products
        });
      });

  }

  render() {
    return (
      <Header />
    );
  }
}
