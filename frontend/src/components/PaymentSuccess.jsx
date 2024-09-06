import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ProcessPayment() {
    const navigate = useNavigate();

    const handlePayment = async () => {
        try {
            // Example: Fake payment outcome
            const paymentSuccessful = false; // Set this to true or false based on real payment outcome

            if (paymentSuccessful) {
                navigate('/');
            } else {
                const response = await axios.get('https://novelnest-backend.onrender.com/payment-success');
                console.log(response.data.message);
                navigate('/');  // Navigate to the payment success page
            }
        } catch (error) {
            console.error('Error during payment process:', error);
            // Optionally navigate to an error page or handle the error in some way
        }
    };

    return (
        <div>
            <button onClick={handlePayment}>Proceed with Payment</button>
        </div>
    );
}

export default ProcessPayment;
