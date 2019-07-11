import React from 'react';

function ProductListItem(props) {
  if (props.productsFromApp.length === 0) {
    return (
      null
    );
  } else {
    return (
      <React.Fragment>
        <div className="card ml-3 mt-3" style={{ width: 18 + 'rem' }}>
          <img className="card-img-top" src={props.productsFromApp[0].image} alt={props.productsFromApp[0].name}></img>
          <div className="card-body">
            <p>{'$' + (props.productsFromApp[0].price / 100).toFixed(2)}</p>
            <h5 className="card-title">{props.productsFromApp[0].name}</h5>
            <p className="card-text">{props.productsFromApp[0].shortDescription}</p>
          </div>
        </div>
      </React.Fragment>

    );
  }
}

export default ProductListItem;
