import React from 'react';
import Header from './header.jsx';
import ProductList from './product-list';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      view: {
        name: 'catalog',
        params: {}
      }
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
      <React.Fragment>
        <Header />
        <div className="container">
          <ProductList productsFromApp = {this.state.products}/>
        </div>
      </React.Fragment>
    );
  }
}
