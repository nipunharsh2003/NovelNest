import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

// Load Stripe outside of a component's render to avoid recreating the Stripe object on every render.
const stripePromise = loadStripe('your-publishable-key-here');

const Userpayment = () => {
  const handlePayment = async (orderId) => {
    try {
      // Make a request to your backend to create the payment session
      const response = await axios.post('https://novelnest-backend.onrender.com/create-checkout-session', { orderId });
      
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        sessionId: response.data.id,
      });

      if (error) {
        console.error('Error redirecting to checkout:', error);
        // Optionally, navigate to an error page or display an error message
      }
    } catch (error) {
      console.error('Error initiating payment:', error);
      // Optionally, navigate to an error page or display an error message
    }
  };

  // Your existing component code for rendering the order history goes here
  return (
    <div>
      <button onClick={() => handlePayment('orderId')}>Pay Now</button>
      {/* Render order history and other UI components here */}
    </div>
  );
};

export default Userpayment;
