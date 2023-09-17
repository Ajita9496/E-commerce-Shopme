import React from 'react';
import './payment.css';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import Toast from './toast';

const Payment = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const totalAmount = location.state.totalAmount;
    const [showToast, setShowToast] = useState(false);

    const handleProceedToPayment = () => {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        navigate('/');
      }, 3000);
    };
  

  return (
    <div className='payment-shipping-container'>
      <h2>Payment and Shipping</h2>
      <p>Total Amount to be Paid: ${totalAmount}</p>

      <div className='payment-methods'>
        <h3>Select Payment Method:</h3>
        <div className='payment-option'>
          <input type='radio' id='creditCard' name='payment' value='Credit Card' />
          <label htmlFor='creditCard'>Credit Card</label>
        </div>

        <div className='payment-option'>
          <input type='radio' id='paypal' name='payment' value='PayPal' />
          <label htmlFor='paypal'>PayPal</label>
        </div>

        <div className='payment-option'>
          <input type='radio' id='bankTransfer' name='payment' value='Bank Transfer' />
          <label htmlFor='bankTransfer'>Bank Transfer</label>
        </div>
      </div>

      <button className='pay-button' onClick={handleProceedToPayment}>Proceed to Payment</button>
      {showToast && <Toast message="Thank you for buying!" onClose={() => setShowToast(false)} />}
    </div>
  );
};

export default Payment;
