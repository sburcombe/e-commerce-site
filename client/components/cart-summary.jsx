import React from 'react';
import CartSummaryItem from './cart-summary-item';

class CartSummary extends React.Component {

  getCartSummaryItem(props) {
    return (
      this.props.cartItem.length > 0
        ? this.props.cartItem.map(cartItem =>
          <CartSummaryItem key={cartItem.id} item={cartItem} />)
        : <div> No Items In Cart</div>
    );
  }
  getCartTotal() {
    var itemsArray = this.props.cartItem;
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
    return (
      <div className="col-sm-8 table-container">
        <div>
          <button type="button" id="back-to-catalog" onClick={() => this.props.setView('catalog', {})} className="btn btn-outline-secondary mt-3">Back to Catalog</button>
          <h3>My Cart</h3>
          <div>
            {this.getCartSummaryItem()}
          </div>
        </div>
        <div className="d-flex">

          <h3 className = "p-2"> Item Total:  $ {this.getCartTotal()}</h3>
          <button type="button" id="checkout" onClick={() => this.props.setView('checkout', {})} className="btn btn-outline-primary m-auto ml-5 p-2">Checkout</button>

        </div>
      </div>
    );
  }

}

export default CartSummary;
