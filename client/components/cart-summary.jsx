import React from 'react';

function CartSummary(props) {
  return (
    <div className="col-sm-8 table-container">
      <button type="button" id="back-to-catalog" onClick={() => props.setView('catalog')} className="btn btn-outline-secondary mt-3">Back to Catalog</button>
      <h3>My Cart</h3>
      <div>
        {props.getItems()}
      </div>
      <h3> Item Total:  $ {props.cartTotal()}</h3>
    </div>
  );
}

export default CartSummary;
