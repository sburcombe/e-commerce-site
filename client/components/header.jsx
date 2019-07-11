import React from 'react';

function Header() {
  return (
    <div className="d-flex border border-dark justify-content-center
    align-items-center mt-2 ml-5 mr-5">
      <h1 className ="p-2 ">Wicked Sales</h1>
      <img className = "w-25 h-50"src="shopping-cart.png"></img>
    </div>
  );
}

export default Header;
