import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummaryItem from './cart-summary-item';
import CartSummary from './cart-summary';

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
    if (event.target.id === 'back-to-catalog') {
      this.setState({
        view: {
          name: 'catalog',
          params: {}
        }
      });
    } else if (this.state.view['name'] === 'catalog') {
      this.setState({
        view: {
          name: name,
          params: params
        }
      });
    } else if (event.target.id === 'shopping-cart') {
      this.setState({
        view: {
          name: 'cart',
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
  getCartSummaryItem() {
    return (
      this.cartItem.length > 0
        ? this.cartItem.map(cartItem =>
          <CartSummaryItem key={cartItem.id} item={cartItem}/>)
        : <div> No Items In Cart</div>
    );
  }
  getCartTotal() {
    var itemsArray = this.cartItem;
    var sum = 0;
    for (var itemIndex = 0; itemIndex < itemsArray.length; itemIndex++) {
      var currentItemPrice = itemsArray[itemIndex].price;
      sum += currentItemPrice;
    }
    var total = (sum / 100).toFixed(2);
    return (
      Number.isNaN(total)
        ? 'No Items In Cart'
        : total
    );
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
            <CartSummary setView={this.setView} cartItem={this.state.cart} getItems={this.getCartSummaryItem} cartTotal={this.getCartTotal} />
          </div>
        </React.Fragment>
      );
    }

  }
}
