import React from 'react';
import { useNavigate } from 'react-router-dom';

function PaymentFailure() {
    const navigate = useNavigate();

    const handleRetry = () => {
        // Redirect the user back to the payment page or any other page
        navigate('/cart');
    };

    return (
        <div>
            <h1>Payment Failed</h1>
            <p>Unfortunately, your payment could not be processed. Please try again.</p>
            <button onClick={handleRetry}>Retry Payment</button>
        </div>
    );
}

export default PaymentFailure;
