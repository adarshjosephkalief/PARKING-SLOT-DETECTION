import React, { useState } from 'react';

function PaymentScreen() {
  const [paymentMethod, setPaymentMethod] = useState('upi');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleCancelClick = () => {
    // handle cancel logic here
  };

  return (
    <div>
      <h2>Payment Screen</h2>
      
      <form>
        <div>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="upi"
              checked={paymentMethod === 'upi'}
              onChange={handlePaymentMethodChange}
            />
            UPI
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="card"
              checked={paymentMethod === 'card'}
              onChange={handlePaymentMethodChange}
            />
            Credit/Debit Card
          </label>
        </div>
      </form>
      {paymentMethod === 'upi' && (
        <div>
          <h3>Scan the QR code below to make payment through UPI:</h3>
          <img src="path/to/upi-qr-code.png" alt="UPI QR code" />
        </div>
      )}
      {paymentMethod === 'card' && (
        <div>
          <h3>Enter your credit/debit card details:</h3>
          <form>
            <label>
              Card Number:
              <input type="text" name="cardNumber" />
            </label>
            <br />
            <label>
              Expiry Date:
              <input type="text" name="expiryDate" />
            </label>
            <br />
            <label>
              CVV:
              <input type="text" name="cvv" />
            </label>
          </form>
        </div>
      )}
      <button onClick={handleCancelClick}>Cancel</button>
    </div>
  );
}

export default PaymentScreen;
