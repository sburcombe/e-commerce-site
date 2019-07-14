import React from 'react';

function CartSummaryItem(props) {
  return (
    <div className="container">
      {/* <button type="button" onClick={props.setView} className="btn btn-outline-secondary mt-3">Back to Catalog</button> */}
      <div className="row">
        <div className="col-lg-8 col-md-6 mt-3">
          <img className="img-fluid" src={props.cartItems[1].image} alt={props.cartItems[1].name} ></img>
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
          <h5>{props.cartItems[1].name}</h5>
          <p>{'$' + (props.cartItems[1].price / 100).toFixed(2)}</p>
          <p >{props.cartItems[1].shortDescription}</p>
          <button type="button" className="btn btn-success">Add to Cart</button>
        </div>
      </div>
      <div className="mt-3">
        <p>{props.cartItems[1].longDescription}</p>
      </div></div>
  );
}

export default CartSummaryItem;
