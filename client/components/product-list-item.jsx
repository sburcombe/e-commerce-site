import React from 'react';

function ProductListItem(props) {
  if (props.productInfo.length === 0) {
    return (
      null
    );
  } else {
    return (
      <div className = "col m-3">
        <div className="card" style={{ width: 18 + 'rem' }}>
          <img className="card-img-top" src={props.productInfo.image} alt={props.productInfo.name} style={{ objectFit: 'contain', height: 18 + 'rem' }}></img>
          <div className="card-body">
            <p>{'$' + (props.productInfo.price / 100).toFixed(2)}</p>
            <h5 className="card-title">{props.productInfo.name}</h5>
            <p className="card-text">{props.productInfo.shortDescription}</p>
          </div>
        </div>
      </div>

    );
  }
}

export default ProductListItem;
