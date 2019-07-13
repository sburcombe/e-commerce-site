import React from 'react';

function Header(props) {
  return (
    <div className="justify-content-center d-flex">
      <div className="d-flex border border-dark justify-content-center align-items-center mt-2 ml-5"
        style= {{ height: 155 + 'px', width: 700 + 'px' }}>
        <h1 className ="p-2 ">Wicked Sales</h1>
        <img className = "p-2"src="shopping-cart.png" style={{ height: 150 + 'px', width: 150 + 'px' }}></img>
        <div className ="p-2 ml-5">
          <h4 className ="d-inline-block ml-5">{props.cartItemsAmount + ' items'}</h4>
          <i className="fa fa-shopping-cart fa-2x d-inline-block"></i>
        </div>
      </div>
    </div>
  );
}

export default Header;
