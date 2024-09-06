
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OTPVerification = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();

    console.log('OTP entered:', otp);

    try {
      console.log('Sending OTP to server...');
      const response = await axios.post("https://novelnest-backend.onrender.com/api/verify-otp", { otp });
      console.log('Server response:', response.data);

      if (response.status === 200) {
        if (response.data.message === 'OTP verified successfully') {
          console.log('OTP verified successfully.');
          navigate('/login'); // Redirect on successful verification
        } else {
          console.log('Invalid OTP');
          setError('Invalid OTP');
        }
      } else {
        console.log('Unexpected response status:', response.status);
        setError('Unexpected response from server');
      }
    } catch (error) {
      console.error('Error during OTP verification:', error.response ? error.response.data : error.message);
      setError('An error occurred. Please try again.'); // Handle the error properly
    }
  };

  return (
    <div className="h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-zinc-800 rounded-lg shadow-lg px-10 py-8 w-full max-w-md">
        <p className="text-2xl font-semibold text-white mb-6">OTP Verification</p>
        <form onSubmit={handleVerifyOTP}>
          <div>
            <label htmlFor="otp" className="text-gray-400 mb-2 block">Enter OTP</label>
            <input
              type="text"
              className="w-full p-3 bg-gray-700 text-white rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter OTP"
              value={otp}
              onChange={handleOtpChange}
            />
          </div>
          {error && (
            <div className="text-red-500 text-sm mb-4">{error}</div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition duration-200"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default OTPVerification;
