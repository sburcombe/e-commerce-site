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
    this.setView = this.setView.bind(this);
  }
  componentDidMount() {
    this.getProducts();
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

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <ProductList setView={this.setView} productsFromApp = {this.state.products}/>
        </div>
      </React.Fragment>
    );
  }
}
