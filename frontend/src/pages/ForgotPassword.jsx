import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ForgotPassword.css'; // Import the CSS file for styling

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://novelnest-backend.onrender.com/api/forgot-password', { email });
      setMessage("A reset link has been sent to your email.");
    } catch (error) {
      setMessage("Error sending reset link. Try again.");
    }
  };

  return (
    <div className='forgot-password-container'>
      <div className='forgot-password-card'>
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className='input-field'
            required 
          />
          <button type="submit" className='submit-button'>Send Reset Link</button>
        </form>
        {message && <p className='message'>{message}</p>}
        <p className='back-to-login'>
          Go back to <Link to="/login" className='login-link'>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
