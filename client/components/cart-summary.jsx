import React from 'react';

function CartSummary(props) {
  return (
    <div className="col-sm-8 table-container">
      <h3>My Cart</h3>
      <div>
        {props.getItems()}
      </div>
      <h3> Item Total:  $ {props.cartTotal()}</h3>
    </div>
  );
}

export default CartSummary;
