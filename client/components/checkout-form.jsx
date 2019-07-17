import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: ''
    };
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }
  handleCreditCardChange(event) {
    this.setState({
      creditCard: event.target.value
    });
  }
  handleShippingAddressChange(event) {
    this.setState({
      shippingAddress: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h3>Order Total</h3>
        <h3> $ 0.00</h3>
        <form>
          <div className="form-group">
            <label htmlFor="nameInput">Name</label>
            <input type="input" className="form-control" id="nameInput"></input>
          </div>
          <div className="form-group">
            <label htmlFor="creditCardInput">Credit Card</label>
            <input type="input" className="form-control" id="creditCardInput" ></input>
          </div>

          <div className="form-group">
            <label htmlFor="shippingAddressTextarea">Shipping Address</label>
            <textarea className="form-control" id="shippingAddressTextarea" rows="3"></textarea>
          </div>
        </form>
        <div className="d-flex justify-content-around">
          <button type="button" id="back-to-catalog" onClick={() => this.props.setView('catalog', {})} className="btn btn-outline-secondary mt-3">Continue Shopping</button>
          <button type="input" id="back-to-catalog" onClick={() => this.props.setView('catalog', {})} className="btn btn-outline-secondary mt-3">Place Order</button>
        </div>

      </div>

    );
  }
}

export default CheckoutForm;
