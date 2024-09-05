// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';

// // const VerifyOtp = () => {
// //   const [otp, setOtp] = useState('');
// //   const [phone, setPhone] = useState('');
// //   const navigate = useNavigate();

// //   const handleVerifyOTP = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axios.post('http://localhost:8100/api/verify-otp', { phone, otp });
// //       alert(response.data.message);

// //       if (response.status === 200) {
// //         navigate('/login');
// //       }
// //     } catch (error) {
// //       console.error(error.response ? error.response.data : error.message);
// //       alert('Failed to verify OTP');
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-900">
// //       <div className="bg-zinc-800 p-8 rounded-lg shadow-lg w-full max-w-md">
// //         <h2 className="text-2xl font-semibold text-white mb-6">Verify OTP</h2>
// //         <form onSubmit={handleVerifyOTP}>
// //           <div className="mb-4">
// //             <label htmlFor="phone" className="block text-gray-400 mb-2">Phone Number</label>
// //             <input
// //               type="text"
// //               name="phone"
// //               placeholder="Enter Phone Number"
// //               value={phone}
// //               onChange={(e) => setPhone(e.target.value)}
// //               className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             />
// //           </div>
// //           <div className="mb-4">
// //             <label htmlFor="otp" className="block text-gray-400 mb-2">Enter OTP</label>
// //             <input
// //               type="text"
// //               name="otp"
// //               placeholder="Enter OTP"
// //               value={otp}
// //               onChange={(e) => setOtp(e.target.value)}
// //               className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             />
// //           </div>
// //           <button
// //             type="submit"
// //             className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition duration-200"
// //           >
// //             Verify OTP
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default VerifyOtp;
// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';

// // const VerifyOtp = () => {
// //   const [otp, setOtp] = useState('');
// //   const [phone, setPhone] = useState('');
// //   const navigate = useNavigate();

// //   const handleVerifyOTP = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axios.post('http://localhost:8100/api/verify-otp', { phone, otp });
// //       alert(response.data.message);

// //       if (response.status === 200) {
// //         navigate('/login');
// //       }
// //     } catch (error) {
// //       console.error(error.response ? error.response.data : error.message);
// //       alert('Failed to verify OTP');
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-900">
// //       <div className="bg-zinc-800 p-8 rounded-lg shadow-lg w-full max-w-md">
// //         <h2 className="text-2xl font-semibold text-white mb-6">Verify OTP</h2>
// //         <form onSubmit={handleVerifyOTP}>
// //           <div className="mb-4">
// //             <label htmlFor="phone" className="block text-gray-400 mb-2">Phone Number</label>
// //             <input
// //               type="text"
// //               name="phone"
// //               placeholder="Enter Phone Number"
// //               value={phone}
// //               onChange={(e) => setPhone(e.target.value)}
// //               className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             />
// //           </div>
// //           <div className="mb-4">
// //             <label htmlFor="otp" className="block text-gray-400 mb-2">Enter OTP</label>
// //             <input
// //               type="text"
// //               name="otp"
// //               placeholder="Enter OTP"
// //               value={otp}
// //               onChange={(e) => setOtp(e.target.value)}
// //               className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             />
// //           </div>
// //           <button
// //             type="submit"
// //             className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition duration-200"
// //           >
// //             Verify OTP
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default VerifyOtp;
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const VerifyOtp = () => {
//   const [otp, setOtp] = useState('');
//   const [phone, setPhone] = useState(''); // This can be pre-filled or fetched from user data
//   const navigate = useNavigate();

//   const handleVerifyOTP = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8100/api/verify-otp', { phone, otp });
//       alert(response.data.message);

//       if (response.status === 200) {
//         navigate('/login'); // Navigate to login after successful OTP verification
//       }
//     } catch (error) {
//       console.error(error.response ? error.response.data : error.message);
//       alert('Failed to verify OTP');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900">
//       <div className="bg-zinc-800 p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-semibold text-white mb-6">Verify OTP</h2>
//         <form onSubmit={handleVerifyOTP}>
//           <div className="mb-4">
//             <label htmlFor="phone" className="block text-gray-400 mb-2">Phone Number</label>
//             <input
//               type="text"
//               name="phone"
//               placeholder="Enter Phone Number"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                // Disable phone input if not needed for verification
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="otp" className="block text-gray-400 mb-2">Enter OTP</label>
//             <input
//               type="text"
//               name="otp"
//               placeholder="Enter OTP"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition duration-200"
//           >
//             Verify OTP
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default VerifyOtp;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const VerifyOtp = () => {
//   const [otp, setOtp] = useState('');
//   const [phone, setPhone] = useState(''); // The phone number should be the same as during signup
//   const navigate = useNavigate();

//   const handleVerifyOTP = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8100/api/verify-otp', { phone, otp });
//       alert(response.data.message);

//       if (response.status === 200) {
//         navigate('/login'); // Navigate to login after successful OTP verification
//       }
//     } catch (error) {
//       console.error(error.response ? error.response.data : error.message);
//       alert('Failed to verify OTP');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900">
//       <div className="bg-zinc-800 p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-semibold text-white mb-6">Verify OTP</h2>
//         <form onSubmit={handleVerifyOTP}>
//           <div className="mb-4">
//             <label htmlFor="phone" className="block text-gray-400 mb-2">Phone Number</label>
//             <input
//               type="text"
//               name="phone"
//               placeholder="Enter Phone Number"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="otp" className="block text-gray-400 mb-2">Enter OTP</label>
//             <input
//               type="text"
//               name="otp"
//               placeholder="Enter OTP"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition duration-200"
//           >
//             Verify OTP
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default VerifyOtp;
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const VerifyOtp = () => {
//   const [otp, setOtp] = useState('');
//   const [phone, setPhone] = useState(''); // Ensure this matches the phone used during signup
//   const navigate = useNavigate();

//   const handleOtpChange = (e) => {
//     setOtp(e.target.value);
//   };

//   const handleVerifyOTP = async (e) => {
//     e.preventDefault();

//     console.log('OTP entered:', otp); // Log the OTP entered by the user

//     try {
//       console.log('Sending OTP to server...');
//       const response = await axios.post('http://localhost:8100/api/verify-otp', { otp });
//       console.log('Server response:', response.data); // Log the server's response

//       if (response.status === 200) {
//         if (response.data.success) {
//           console.log('OTP verified successfully.');
//           navigate('/success-page'); // Redirect on successful verification
//         } else {
//           console.log('Invalid OTP');
//           setError('Invalid OTP');
//         }
//       } else {
//         console.log('Unexpected response status:', response.status);
//         setError('Unexpected response from server');
//       }
//     } catch (error) {
//       console.error('Error during OTP verification:', error.response ? error.response.data : error.message);
//       setError('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900">
//       <div className="bg-zinc-800 p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-semibold text-white mb-6">Verify OTP</h2>
//         <form onSubmit={handleVerifyOTP}>
//           <div className="mb-4">
//             <label htmlFor="phone" className="block text-gray-400 mb-2">Phone Number</label>
//             <input
//               type="text"
//               name="phone"
//               placeholder="Enter Phone Number"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="otp" className="block text-gray-400 mb-2">Enter OTP</label>
//             <input
//               type="text"
//               name="otp"
//               placeholder="Enter OTP"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition duration-200"
//           >
//             Verify OTP
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default VerifyOtp;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const OTPVerification = () => {
//   const [otp, setOtp] = useState('');
//   const [phone, setPhone] = useState(''); // Add phone state
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleOtpChange = (e) => {
//     setOtp(e.target.value);
//   };

//   const handlePhoneChange = (e) => {
//     setPhone(e.target.value); // Handle phone number input
//   };

//   const handleVerifyOTP = async (e) => {
//     e.preventDefault();

//     console.log('OTP entered:', otp);
//     console.log('Phone number entered:', phone); // Log the phone number

//     try {
//       console.log('Sending OTP and phone number to server...');
//       const response = await axios.post("http://localhost:8100/api/verify-otp", { otp, phone });
//       console.log('Server response:', response.data);

//       if (response.status === 200) {
//         if (response.data.success) {
//           console.log('OTP verified successfully.');
//           navigate('/success-page'); // Redirect on successful verification
//         } else {
//           console.log('Invalid OTP');
//           setError('Invalid OTP');
//         }
//       } else {
//         console.log('Unexpected response status:', response.status);
//         setError('Unexpected response from server');
//       }
//     } catch (error) {
//       console.error('Error during OTP verification:', error.response ? error.response.data : error.message);
//       setError('An error occurred. Please try again.'); // Handle the error properly
//     }
//   };

//   return (
//     <div className="h-screen bg-gray-900 flex items-center justify-center">
//       <div className="bg-zinc-800 rounded-lg shadow-lg px-10 py-8 w-full max-w-md">
//         <p className="text-2xl font-semibold text-white mb-6">OTP Verification</p>
//         <form onSubmit={handleVerifyOTP}>
//           <div>
//             <label htmlFor="phone" className="text-gray-400 mb-2 block">Phone Number</label>
//             <input
//               type="text"
//               className="w-full p-3 bg-gray-700 text-white rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your phone number"
//               value={phone}
//               onChange={handlePhoneChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="otp" className="text-gray-400 mb-2 block">Enter OTP</label>
//             <input
//               type="text"
//               className="w-full p-3 bg-gray-700 text-white rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter OTP"
//               value={otp}
//               onChange={handleOtpChange}
//             />
//           </div>
//           {error && (
//             <div className="text-red-500 text-sm mb-4">{error}</div>
//           )}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition duration-200"
//           >
//             Verify OTP
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default OTPVerification;
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
      const response = await axios.post("http://localhost:8100/api/verify-otp", { otp });
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
