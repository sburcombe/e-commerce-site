import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkout-form';

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
    this.addToCart = this.addToCart.bind(this);
  }
  componentDidMount() {
    this.getProducts();
    this.getCartItems();
  }

  addToCart(product) {
    fetch('/api/cart.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
      .then(response => {
        return response.json();
      }
      ).then(cartProduct => {
        this.setState({ cart: [...this.state.cart, cartProduct] });
      }
      )
      .catch(error => console.error('error: ', error));
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
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

  placeOrder(orderDetails) {
    this.setState({
      cart: {
        cart: this.state.cart,
        orderDetails
      }
    });
    fetch('/api/orders.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderDetails)
    })
      .then(response => {
        return response.json();
      }
      ).then(cartProduct => {
        this.setState({
          cart: [],
          view: {
            name: 'catalog',
            params: {}
          }
        });
      }
      )
      .catch(error => console.error('error: ', error));
  }

  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <React.Fragment>
          <Header setView= {this.setView} cartItemsAmount ={this.state.cart.length} />
          <div className="container">
            <ProductList setView={this.setView} productsFromApp={this.state.products} />
          </div>
        </React.Fragment>
      );
    } else if (this.state.view.name === 'details') {
      return (
        <React.Fragment>
          <Header setView={this.setView} cartItemsAmount={this.state.cart.length} />
          <div className="container">
            <ProductDetails addToCart={this.addToCart} setView={this.setView} paramsFromApp={this.state.view.params} />
          </div>
        </React.Fragment>

      );
    } else if (this.state.view.name === 'cart') {
      return (
        <React.Fragment>
          <Header setView={this.setView} cartItemsAmount={this.state.cart.length} />
          <div className="container">
            <CartSummary setView={this.setView} cartItem={this.state.cart} cartTotal={this.getCartTotal} />
            <CheckoutForm/>
          </div>
        </React.Fragment>
      );
    }
  }
}
