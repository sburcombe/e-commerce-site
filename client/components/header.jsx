import React from 'react';

function Header(props) {
  return (
    <div className="justify-content-center d-flex">
      {/* <div className="d-flex border border-dark justify-content-center align-items-center mt-2 ml-5"
        style= {{ height: 155 + 'px', width: 700 + 'px' }}> */}

      <img className="p-2" src="./images/elevatelogo.jpg" style={{ height: 150 + 'px', width: 800 + 'px', left: 0 }}></img>
      <div className ="p-2 ml-5 mr-5 mt-1 border">
        <h4 className ="d-inline-block  ml-3">{props.cartItemsAmount + ' items'}</h4>
        <i className="fa fa-shopping-cart fa-2x d-inline-block" id="shopping-cart" onClick={() => props.setView('cart')}></i>
      </div>
    </div>

  );
}

export default Header;
