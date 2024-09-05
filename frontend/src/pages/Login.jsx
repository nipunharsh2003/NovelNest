import React, { useState } from 'react';
import axios from 'axios';
import { authActions } from '../store/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './Login.css'; // Import the CSS file for styling

const Login = () => {
  const [Values, setValues] = useState({
    username: "",
    password: "",
    role: "user" // Default role is user
  });

  const [Errors, setErrors] = useState({
    username: "",
    password: ""
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Regular expressions for validation
  const usernameRegex = /^[a-zA-Z\s]{3,20}$/; // Username: alphanumeric, 3-20 characters
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/; // Password: at least 8 characters, 1 uppercase, 1 number

  const change = (e) => {
    const { name, value } = e.target;
    setValues({ ...Values, [name]: value });

    // Validation logic to update error messages only if the role is 'user'
    if (Values.role === 'user') {
      if (name === 'username') {
        if (!usernameRegex.test(value)) {
          setErrors({ ...Errors, username: "Username must be 3-20 characters long and contain only letters and numbers." });
        } else {
          setErrors({ ...Errors, username: "" });
        }
      }

      if (name === 'password') {
        if (!passwordRegex.test(value)) {
          setErrors({ ...Errors, password: "Password must be at least 8 characters long, contain at least one uppercase letter and one number." });
        } else {
          setErrors({ ...Errors, password: "" });
        }
      }
    } else {
      // If role is admin, clear error messages
      setErrors({ username: "", password: "" });
    }
  };

  const submit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      // Field validations
      if (Values.username === "" || Values.password === "") {
        alert("All fields are required");
      } else if (Values.role === 'user' && (Errors.username || Errors.password)) {
        alert("Please fix the errors before submitting");
      } else {
        const response = await axios.post("http://localhost:8100/api/sign-in", Values);
        alert("Login successfully");

        dispatch(authActions.login());
        dispatch(authActions.changeRole(response.data.role));
        localStorage.setItem('id', response.data.id);
        localStorage.setItem('role', response.data.role);
        localStorage.setItem('token', response.data.token);
        navigate("/profile");
      }
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className='login-container'>
      <div className='login-card'>
        <p className='login-title'>Login</p>

        <div className='input-group'>
          <label htmlFor="role" className='input-label'>
            Role
          </label>
          <select
            name="role"
            value={Values.role}
            onChange={change}
            className='input-field'
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <div className='input-group'>
          <label htmlFor="username" className='input-label'>
            Username
          </label>
          <input
            type="text"
            className='input-field'
            placeholder='username'
            name='username'
            value={Values.username}
            onChange={change}
            required
          />
          {Values.role === 'user' && Errors.username && <div className='error-message'>{Errors.username}</div>}
        </div>

        <div className='input-group'>
          <label htmlFor="password" className='input-label'>Password</label>
          <input
            type="password"
            className='input-field'
            placeholder='password'
            name='password'
            value={Values.password}
            onChange={change}
            required
          />
          {Values.role === 'user' && Errors.password && <div className='error-message'>{Errors.password}</div>}
        </div>

        <div className='submit-group'>
          <button
            className='submit-button'
            onClick={submit}
          >
            Log In
          </button>
        </div>
        
        <p className='alternative-option'>Or</p>
        <p className='sign-up'>
          Don't have an account? &nbsp;
          <Link to="/SignUp" className='link'>
            <u>Sign Up</u>
          </Link>
        </p>
        
        <p className='forgot-password'>
          Forgot your password? &nbsp;
          <Link to="/forgot-password" className='link'>
            <u>Reset Password</u>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
