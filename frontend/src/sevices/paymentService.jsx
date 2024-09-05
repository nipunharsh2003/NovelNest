import axios from 'axios';
import { useNavigate ,Navigate} from 'react-router-dom';

const headers = {
  id: localStorage.getItem("id"),
  authorization: `Bearer ${localStorage.getItem("token")}`,
};
const Navigate = useNavigate();

export const createCheckoutSession = async (orderId) => {
  try {
    const response = await axios.post("http://localhost:8100/api/create-checkout-session", { orderId }, { headers });
    return response.data;
    Navigate("/payment-success")
    
  } catch (error) {
    console.error("Error creating checkout session:", error);
    throw error;
  }
};

export const createPaymentIntent = async (orderId) => {
  try {
    const response = await axios.post("http://localhost:8100/api/create-payment-intent", { orderId }, { headers });
    return response.data;
  } catch (error) {
    console.error("Error creating payment intent:", error);
    throw error;
  }
};
