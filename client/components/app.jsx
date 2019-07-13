import React from 'react';
import Header from './header.jsx';
import ProductList from './product-list';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      view: {
        name: 'catalog',
        params: {}
      },
      cart: []
    };
    this.setView = this.setView.bind(this);
  }
  componentDidMount() {
    this.getProducts();
    this.getCartItems();
  }

  setView(name, params) {
    if (this.state.view['name'] === 'catalog') {
      this.setState({
        view: {
          name: name,
          params: params
        }
      });
    } else {
      this.setState({
        view: {
          name: 'catalog',
          params: {}
        }
      });
    }
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

  getCartItems() {
    fetch('/api/cart.php')
      .then(response => {
        return (
          response.json()
        );
      })
      .then(cartItems => {
        this.setState({
          cart: cartItems
        });
      });
  }

  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <React.Fragment>
          <Header />
          <div className="container">
            <ProductList setView={this.setView} productsFromApp={this.state.products} />
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Header />
          <div className="container">
            <ProductDetails setView={this.setView} paramsFromApp={this.state.view.params} />
          </div>
        </React.Fragment>

      );
    }

  }
}
