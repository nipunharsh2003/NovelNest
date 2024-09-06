
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    address: "",
    password: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const change = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const formattedValue = value.startsWith('+91') ? value : `+91${value.replace(/^\+91/, '')}`;
      setValues({ ...values, [name]: formattedValue });
    } else {
      setValues({ ...values, [name]: value });
    }
    validate({ ...values, [name]: value });
  };

  const validate = (fieldValues = values) => {
    let tempErrors = { ...errors };

    if ('username' in fieldValues)
      tempErrors.username = fieldValues.username ? "" : "Username is required";

    if ('email' in fieldValues) {
      tempErrors.email = fieldValues.email ? "" : "Email is required";
      if (fieldValues.email && !/\S+@\S+\.\S+/.test(fieldValues.email)) {
        tempErrors.email = "Email is not valid";
      }
    }

    if ('address' in fieldValues)
      tempErrors.address = fieldValues.address ? "" : "Address is required";

    if ('phone' in fieldValues) {
      const phoneRegex = /^\+91\d{10}$/;
      if (!fieldValues.phone) {
        tempErrors.phone = "Phone number is required";
      } else if (!phoneRegex.test(fieldValues.phone)) {
        tempErrors.phone = "Phone number must be 10 digits long with +91 prefix";
      } else {
        tempErrors.phone = "";
      }
    }

    if ('password' in fieldValues) {
      const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
      tempErrors.password = fieldValues.password
        ? passwordRegex.test(fieldValues.password)
          ? ""
          : "Password must be at least 8 characters long, contain at least one uppercase letter and one number."
        : "Password is required";
    }

    setErrors({ ...tempErrors });

    // Return true if no errors
    return Object.keys(tempErrors).every((key) => tempErrors[key] === "");
  };

  const submit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post("https://novelnest-backend.onrender.com/api/signup", values);
        alert(response.data.message);
        navigate("/otp-verification");
      } catch (error) {
        console.error(error.response ? error.response.data : error.message);
        setErrors({ general: "An unexpected error occurred. Please try again." });
      }
    }
  };

  return (
    <div className='h-screen bg-gray-900 flex items-center justify-center'>
      <div className='bg-zinc-800 rounded-lg shadow-lg px-10 py-8 w-full max-w-md'>
        <p className='text-2xl font-semibold text-white mb-6'>Sign Up</p>
        <form onSubmit={submit}>
          <div>
            <label htmlFor="username" className='text-gray-400 mb-2 block'>Username</label>
            <input
              type="text"
              className='w-full p-3 bg-gray-700 text-white rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Enter your username'
              name='username'
              value={values.username}
              onChange={change}
            />
            {errors.username && (
              <div className='text-red-500 text-sm mb-2'>{errors.username}</div>
            )}
          </div>
          <div>
            <label htmlFor="email" className='text-gray-400 mb-2 block'>Email</label>
            <input
              type="email"
              className='w-full p-3 bg-gray-700 text-white rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Enter your email'
              name='email'
              value={values.email}
              onChange={change}
            />
            {errors.email && (
              <div className='text-red-500 text-sm mb-2'>{errors.email}</div>
            )}
          </div>
          <div>
            <label htmlFor="password" className='text-gray-400 mb-2 block'>Password</label>
            <input
              type="password"
              className='w-full p-3 bg-gray-700 text-white rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Enter your password'
              name='password'
              value={values.password}
              onChange={change}
            />
            {errors.password && (
              <div className='text-red-500 text-sm mb-2'>{errors.password}</div>
            )}
          </div>
          <div>
            <label htmlFor="address" className='text-gray-400 mb-2 block'>Address</label>
            <textarea
              name="address"
              className='w-full p-3 bg-gray-700 text-white rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Enter your address'
              value={values.address}
              onChange={change}
            />
            {errors.address && (
              <div className='text-red-500 text-sm mb-2'>{errors.address}</div>
            )}
          </div>
          <div>
            <label htmlFor="phone" className='text-gray-400 mb-2 block'>Phone Number</label>
            <input
              type="text"
              className='w-full p-3 bg-gray-700 text-white rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Enter your phone number'
              name='phone'
              value={values.phone}
              onChange={change}
            />
            {errors.phone && (
              <div className='text-red-500 text-sm mb-2'>{errors.phone}</div>
            )}
          </div>
          {errors.general && (
            <div className='text-red-500 text-sm mb-4'>{errors.general}</div>
          )}
          <button
            type="submit"
            className='w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition duration-200'
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
