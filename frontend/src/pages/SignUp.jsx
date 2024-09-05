// // // import axios from 'axios';
// // import { useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import axios from 'axios'

// // const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

// // const validatePassword = (password) => {
// //   if (!password) {
// //     return "Password is required";
// //   } else if (!passwordRegex.test(password)) {
// //     return "Password must be at least 8 characters long, contain at least one uppercase letter and one number.";
// //   }
// //   return "";
// // };

// // const SignUp = () => {
// //   const [Values, setValues] = useState({
// //     username: "",
// //     email: "",
// //     address: "",
// //     password: "",
// //   });

// //   const [errors, setErrors] = useState({});

// //   const navigate = useNavigate();

// //   const change = (e) => {
// //     const { name, value } = e.target;
// //     setValues({ ...Values, [name]: value });
// //   };

// //   const validate = () => {
// //     let tempErrors = {};
// //     if (Values.username === "") tempErrors.username = "Username is required";
// //     if (Values.email === "") {
// //       tempErrors.email = "Email is required";
// //     } else if (!/\S+@\S+\.\S+/.test(Values.email)) {
// //       tempErrors.email = "Email is not valid";
// //     }
// //     if (Values.address === "") tempErrors.address = "Address is required";
    
// //     const passwordError = validatePassword(Values.password);
// //     if (passwordError) {
// //       tempErrors.password = passwordError;
// //     }

// //     setErrors(tempErrors);
// //     return Object.keys(tempErrors).length === 0;
// //   };

// //   const submit = async (e) => {
// //     e.preventDefault(); // Prevent default form submission
// //     if (validate()) {
// //       try {
// //         const response = await axios.post("http://localhost:8100/api/signup", Values);
// //         alert(response.data.message);
// //         console.log(response.data.data);
// //         navigate("/Login");
// //       } catch (error) {
// //         console.error(error.response ? error.response.data : error.message);
// //       }
// //     }
// //   };

// //   return (
// //     <div className='h-screen bg-gray-900 flex items-center justify-center'>
// //       <div className='bg-zinc-800 rounded-lg shadow-lg px-10 py-8 w-full max-w-md'>
// //         <p className='text-2xl font-semibold text-white mb-6'>Sign Up</p>
// //         <form onSubmit={submit}>
// //           <div>
// //             <label htmlFor="username" className='text-gray-400 mb-2 block'>Username</label>
// //             <input
// //               type="text"
// //               className='w-full p-3 bg-gray-700 text-white rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
// //               placeholder='Enter your username'
// //               name='username'
// //               value={Values.username}
// //               onChange={change}
// //             />
// //             {errors.username && (
// //               <div className='text-red-500 text-sm mb-2'>{errors.username}</div>
// //             )}
// //           </div>
// //           <div>
// //             <label htmlFor="email" className='text-gray-400 mb-2 block'>Email</label>
// //             <input
// //               type="email"
// //               className='w-full p-3 bg-gray-700 text-white rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
// //               placeholder='Enter your email'
// //               name='email'
// //               value={Values.email}
// //               onChange={change}
// //             />
// //             {errors.email && (
// //               <div className='text-red-500 text-sm mb-2'>{errors.email}</div>
// //             )}
// //           </div>
// //           <div>
// //             <label htmlFor="password" className='text-gray-400 mb-2 block'>Password</label>
// //             <input
// //               type="password"
// //               className='w-full p-3 bg-gray-700 text-white rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
// //               placeholder='Enter your password'
// //               name='password'
// //               value={Values.password}
// //               onChange={change}
// //             />
// //             {errors.password && (
// //               <div className='text-red-500 text-sm mb-2'>{errors.password}</div>
// //             )}
// //           </div>
// //           <div>
// //             <label htmlFor="address" className='text-gray-400 mb-2 block'>Address</label>
// //             <textarea
// //               name="address"
// //               className='w-full p-3 bg-gray-700 text-white rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
// //               placeholder='Enter your address'
// //               value={Values.address}
// //               onChange={change}
// //             />
// //             {errors.address && (
// //               <div className='text-red-500 text-sm mb-2'>{errors.address}</div>
// //             )}
// //           </div>
// //           <button
// //             type="submit"
// //             className='w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition-all duration-200'
// //           >
// //             Sign Up
// //           </button>
// //         </form>
// //         <p className='mt-4 text-center text-gray-400'>
// //           Already have an account?&nbsp;
// //           <Link to="/login" className='text-blue-500 hover:underline'>
// //             Log In
// //           </Link>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }

// // export default SignUp;
// // import { useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import axios from 'axios';

// // import { useState } from 'react';
// // const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
// // const phoneRegex = /^\d{10}$/; // Adjust regex according to your phone number format

// // const validatePassword = (password) => {
// //   if (!password) {
// //     return "Password is required";
// //   } else if (!passwordRegex.test(password)) {
// //     return "Password must be at least 8 characters long, contain at least one uppercase letter and one number.";
// //   }
// //   return "";
// // };

// // const validatePhone = (phone) => {
// //   if (!phone) {
// //     return "Phone number is required";
// //   } else if (!phoneRegex.test(phone)) {
// //     return "Phone number must be 10 digits long";
// //   }
// //   return "";
// // };

// // const SignUp = () => {
// //   const [values, setValues] = useState({
// //     username: "",
// //     email: "",
// //     address: "",
// //     password: "",
// //     phone: "", // Added phone field
// //   });

// //   const [errors, setErrors] = useState({});

// //   const navigate = useNavigate();

// //   const change = (e) => {
// //     const { name, value } = e.target;
// //     setValues({ ...values, [name]: value });
// //   };

// //   const validate = () => {
// //     let tempErrors = {};
// //     if (values.username === "") tempErrors.username = "Username is required";
// //     if (values.email === "") {
// //       tempErrors.email = "Email is required";
// //     } else if (!/\S+@\S+\.\S+/.test(values.email)) {
// //       tempErrors.email = "Email is not valid";
// //     }
// //     if (values.address === "") tempErrors.address = "Address is required";
// //     if (values.phone === "") {
// //       tempErrors.phone = "Phone number is required";
// //     } else if (!phoneRegex.test(values.phone)) {
// //       tempErrors.phone = "Phone number must be 10 digits long";
// //     }

// //     const passwordError = validatePassword(values.password);
// //     if (passwordError) {
// //       tempErrors.password = passwordError;
// //     }

// //     setErrors(tempErrors);
// //     return Object.keys(tempErrors).length === 0;
// //   };

// //   const submit = async (e) => {
// //     e.preventDefault();
// //     if (validate()) {
// //       try {
// //         const response = await axios.post("http://localhost:8100/api/signup", values);
// //         alert(response.data.message);
// //         console.log(response.data.data);
// //         navigate("/otp-verification");
// //       } catch (error) {
// //         console.error(error.response ? error.response.data : error.message);
// //         setErrors({ general: "An unexpected error occurred. Please try again." });
// //       }
// //     }
// //   };

// //   return (
// //     <div className='h-screen bg-gray-900 flex items-center justify-center'>
// //       <div className='bg-zinc-800 rounded-lg shadow-lg px-10 py-8 w-full max-w-md'>
// //         <p className='text-2xl font-semibold text-white mb-6'>Sign Up</p>
// //         <form onSubmit={submit}>
// //           <div>
// //             <label htmlFor="username" className='text-gray-400 mb-2 block'>Username</label>
// //             <input
// //               type="text"
// //               className='w-full p-3 bg-gray-700 text-white rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
// //               placeholder='Enter your username'
// //               name='username'
// //               value={values.username}
// //               onChange={change}
// //             />
// //             {errors.username && (
// //               <div className='text-red-500 text-sm mb-2'>{errors.username}</div>
// //             )}
// //           </div>
// //           <div>
// //             <label htmlFor="email" className='text-gray-400 mb-2 block'>Email</label>
// //             <input
// //               type="email"
// //               className='w-full p-3 bg-gray-700 text-white rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
// //               placeholder='Enter your email'
// //               name='email'
// //               value={values.email}
// //               onChange={change}
// //             />
// //             {errors.email && (
// //               <div className='text-red-500 text-sm mb-2'>{errors.email}</div>
// //             )}
// //           </div>
// //           <div>
// //             <label htmlFor="password" className='text-gray-400 mb-2 block'>Password</label>
// //             <input
// //               type="password"
// //               className='w-full p-3 bg-gray-700 text-white rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
// //               placeholder='Enter your password'
// //               name='password'
// //               value={values.password}
// //               onChange={change}
// //             />
// //             {errors.password && (
// //               <div className='text-red-500 text-sm mb-2'>{errors.password}</div>
// //             )}
// //           </div>
// //           <div>
// //             <label htmlFor="address" className='text-gray-400 mb-2 block'>Address</label>
// //             <textarea
// //               name="address"
// //               className='w-full p-3 bg-gray-700 text-white rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
// //               placeholder='Enter your address'
// //               value={values.address}
// //               onChange={change}
// //             />
// //             {errors.address && (
// //               <div className='text-red-500 text-sm mb-2'>{errors.address}</div>
// //             )}
// //           </div>
// //           <div>
// //             <label htmlFor="phone" className='text-gray-400 mb-2 block'>Phone Number</label>
// //             <input
// //               type="text"
// //               className='w-full p-3 bg-gray-700 text-white rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
// //               placeholder='Enter your phone number'
// //               name='phone'
// //               value={values.phone}
// //               onChange={change}
// //             />
// //             {errors.phone && (
// //               <div className='text-red-500 text-sm mb-2'>{errors.phone}</div>
// //             )}
// //           </div>
// //           {errors.general && (
// //             <div className='text-red-500 text-sm mb-4'>{errors.general}</div>
// //           )}
// //           <button
// //             type="submit"
// //             className='w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition-all duration-200'
// //           >
// //             Sign Up
// //           </button>
// //         </form>
// //         <p className='mt-4 text-center text-gray-400'>
// //           Already have an account?&nbsp;
// //           <Link to="/login" className='text-blue-500 hover:underline'>
// //             Log In
// //           </Link>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }

// // export default SignUp;
// // import { Link, useNavigate } from 'react-router-dom';
// // import axios from 'axios';
// // import { useState } from 'react';

// // const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
// // const phoneRegex = /^\+91\d{10}$/; // Regex for +91 followed by 10 digits

// // const validatePassword = (password) => {
// //   if (!password) {
// //     return "Password is required";
// //   } else if (!passwordRegex.test(password)) {
// //     return "Password must be at least 8 characters long, contain at least one uppercase letter and one number.";
// //   }
// //   return "";
// // };

// // const validatePhone = (phone) => {
// //   if (!phone) {
// //     return "Phone number is required";
// //   } else if (!phoneRegex.test(phone)) {
// //     return "Phone number must be 10 digits long with +91 prefix";
// //   }
// //   return "";
// // };

// // const SignUp = () => {
// //   const [values, setValues] = useState({
// //     username: "",
// //     email: "",
// //     address: "",
// //     password: "",
// //     phone: "", // Added phone field
// //   });

// //   const [errors, setErrors] = useState({});

// //   const navigate = useNavigate();

// //   const change = (e) => {
// //     const { name, value } = e.target;

// //     if (name === 'phone') {
// //       // Remove any existing +91 prefix and format the phone number
// //       const cleanedValue = value.replace(/\D/g, ''); // Remove non-numeric characters
// //       const formattedValue = cleanedValue.length > 10 
// //         ? `+91${cleanedValue.slice(-10)}` 
// //         : `+91${cleanedValue}`;
// //       setValues({ ...values, [name]: formattedValue });
// //     } else {
// //       setValues({ ...values, [name]: value });
// //     }
// //   };

// //   const validate = () => {
// //     let tempErrors = {};
// //     if (values.username === "") tempErrors.username = "Username is required";
// //     if (values.email === "") {
// //       tempErrors.email = "Email is required";
// //     } else if (!/\S+@\S+\.\S+/.test(values.email)) {
// //       tempErrors.email = "Email is not valid";
// //     }
// //     if (values.address === "") tempErrors.address = "Address is required";

// //     const phoneError = validatePhone(values.phone);
// //     if (phoneError) {
// //       tempErrors.phone = phoneError;
// //     }

// //     const passwordError = validatePassword(values.password);
// //     if (passwordError) {
// //       tempErrors.password = passwordError;
// //     }

// //     setErrors(tempErrors);
// //     return Object.keys(tempErrors).length === 0;
// //   };

// //   const submit = async (e) => {
// //     e.preventDefault();
// //     if (validate()) {
// //       try {
// //         const response = await axios.post("http://localhost:8100/api/signup", values);
// //         alert(response.data.message);
// //         console.log(response.data.data);
// //         navigate("/otp-verification");
// //       } catch (error) {
// //         console.error(error.response ? error.response.data : error.message);
// //         setErrors({ general: "An unexpected error occurred. Please try again." });
// //       }
// //     }
// //   };

// //   return (
// //     <div className='h-screen bg-gray-900 flex items-center justify-center'>
// //       <div className='bg-zinc-800 rounded-lg shadow-lg px-10 py-8 w-full max-w-md'>
// //         <p className='text-2xl font-semibold text-white mb-6'>Sign Up</p>
// //         <form onSubmit={submit}>
// //           <div>
// //             <label htmlFor="username" className='text-gray-400 mb-2 block'>Username</label>
// //             <input
// //               type="text"
// //               className='w-full p-3 bg-gray-700 text-white rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
// //               placeholder='Enter your username'
// //               name='username'
// //               value={values.username}
// //               onChange={change}
// //             />
// //             {errors.username && (
// //               <div className='text-red-500 text-sm mb-2'>{errors.username}</div>
// //             )}
// //           </div>
// //           <div>
// //             <label htmlFor="email" className='text-gray-400 mb-2 block'>Email</label>
// //             <input
// //               type="email"
// //               className='w-full p-3 bg-gray-700 text-white rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
// //               placeholder='Enter your email'
// //               name='email'
// //               value={values.email}
// //               onChange={change}
// //             />
// //             {errors.email && (
// //               <div className='text-red-500 text-sm mb-2'>{errors.email}</div>
// //             )}
// //           </div>
// //           <div>
// //             <label htmlFor="password" className='text-gray-400 mb-2 block'>Password</label>
// //             <input
// //               type="password"
// //               className='w-full p-3 bg-gray-700 text-white rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
// //               placeholder='Enter your password'
// //               name='password'
// //               value={values.password}
// //               onChange={change}
// //             />
// //             {errors.password && (
// //               <div className='text-red-500 text-sm mb-2'>{errors.password}</div>
// //             )}
// //           </div>
// //           <div>
// //             <label htmlFor="address" className='text-gray-400 mb-2 block'>Address</label>
// //             <textarea
// //               name="address"
// //               className='w-full p-3 bg-gray-700 text-white rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
// //               placeholder='Enter your address'
// //               value={values.address}
// //               onChange={change}
// //             />
// //             {errors.address && (
// //               <div className='text-red-500 text-sm mb-2'>{errors.address}</div>
// //             )}
// //           </div>
// //           <div>
// //             <label htmlFor="phone" className='text-gray-400 mb-2 block'>Phone Number</label>
// //             <input
// //               type="text"
// //               className='w-full p-3 bg-gray-700 text-white rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
// //               placeholder='Enter your phone number'
// //               name='phone'
// //               value={values.phone}
// //               onChange={change}
// //             />
// //             {errors.phone && (
// //               <div className='text-red-500 text-sm mb-2'>{errors.phone}</div>
// //             )}
// //           </div>
// //           {errors.general && (
// //             <div className='text-red-500 text-sm mb-4'>{errors.general}</div>
// //           )}
// //           <button
// //             type="submit"
// //             className='w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition-all duration-200'
// //           >
// //             Sign Up
// //           </button>
// //         </form>
// //         <p className='mt-4 text-center text-gray-400'>
// //           Already have an account?&nbsp;
// //           <Link to="/login" className='text-blue-500 hover:underline'>
// //             Log In
// //           </Link>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }

// // export default SignUp;
// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';

// // const SignUp = () => {
// //   const [values, setValues] = useState({
// //     username: "",
// //     email: "",
// //     address: "",
// //     password: "",
// //     phone: "",
// //   });

// //   const [errors, setErrors] = useState({});
// //   const navigate = useNavigate();

// //   const change = (e) => {
// //     const { name, value } = e.target;
// //     if (name === 'phone') {
// //       const formattedValue = value.startsWith('+91') ? value : `+91${value}`;
// //       setValues({ ...values, [name]: formattedValue });
// //     } else {
// //       setValues({ ...values, [name]: value });
// //     }
// //   };

// //   const validate = () => {
// //     let tempErrors = {};
// //     if (values.username === "") tempErrors.username = "Username is required";
// //     if (values.email === "") {
// //       tempErrors.email = "Email is required";
// //     } else if (!/\S+@\S+\.\S+/.test(values.email)) {
// //       tempErrors.email = "Email is not valid";
// //     }
// //     if (values.address === "") tempErrors.address = "Address is required";

// //     // Validate phone number
// //     const phoneRegex = /^\+91\d{10}$/;
// //     if (!values.phone) {
// //       tempErrors.phone = "Phone number is required";
// //     } else if (!phoneRegex.test(values.phone)) {
// //       tempErrors.phone = "Phone number must be 10 digits long with +91 prefix";
// //     }

// //     // Validate password
// //     const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
// //     if (!values.password) {
// //       tempErrors.password = "Password is required";
// //     } else if (!passwordRegex.test(values.password)) {
// //       tempErrors.password = "Password must be at least 8 characters long, contain at least one uppercase letter and one number.";
// //     }

// //     setErrors(tempErrors);
// //     return Object.keys(tempErrors).length === 0;
// //   };

// //   const submit = async (e) => {
// //     e.preventDefault();
// //     if (validate()) {
// //       try {
// //         const response = await axios.post("http://localhost:8100/api/signup", values);
// //         alert(response.data.message);
// //         navigate("/otp-verification");
// //       } catch (error) {
// //         console.error(error.response ? error.response.data : error.message);
// //         setErrors({ general: "An unexpected error occurred. Please try again." });
// //       }
// //     }
// //   };

// //   return (
// //     <div className='h-screen bg-gray-900 flex items-center justify-center'>
// //       <div className='bg-zinc-800 rounded-lg shadow-lg px-10 py-8 w-full max-w-md'>
// //         <p className='text-2xl font-semibold text-white mb-6'>Sign Up</p>
// //         <form onSubmit={submit}>
// //           <div>
// //             <label htmlFor="username" className='text-gray-400 mb-2 block'>Username</label>
// //             <input
// //               type="text"
// //               className='w-full p-3 bg-gray-700 text-white rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
// //               placeholder='Enter your username'
// //               name='username'
// //               value={values.username}
// //               onChange={change}
// //             />
// //             {errors.username && (
// //               <div className='text-red-500 text-sm mb-2'>{errors.username}</div>
// //             )}
// //           </div>
// //           <div>
// //             <label htmlFor="email" className='text-gray-400 mb-2 block'>Email</label>
// //             <input
// //               type="email"
// //               className='w-full p-3 bg-gray-700 text-white rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
// //               placeholder='Enter your email'
// //               name='email'
// //               value={values.email}
// //               onChange={change}
// //             />
// //             {errors.email && (
// //               <div className='text-red-500 text-sm mb-2'>{errors.email}</div>
// //             )}
// //           </div>
// //           <div>
// //             <label htmlFor="password" className='text-gray-400 mb-2 block'>Password</label>
// //             <input
// //               type="password"
// //               className='w-full p-3 bg-gray-700 text-white rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
// //               placeholder='Enter your password'
// //               name='password'
// //               value={values.password}
// //               onChange={change}
// //             />
// //             {errors.password && (
// //               <div className='text-red-500 text-sm mb-2'>{errors.password}</div>
// //             )}
// //           </div>
// //           <div>
// //             <label htmlFor="address" className='text-gray-400 mb-2 block'>Address</label>
// //             <textarea
// //               name="address"
// //               className='w-full p-3 bg-gray-700 text-white rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
// //               placeholder='Enter your address'
// //               value={values.address}
// //               onChange={change}
// //             />
// //             {errors.address && (
// //               <div className='text-red-500 text-sm mb-2'>{errors.address}</div>
// //             )}
// //           </div>
// //           <div>
// //             <label htmlFor="phone" className='text-gray-400 mb-2 block'>Phone Number</label>
// //             <input
// //               type="text"
// //               className='w-full p-3 bg-gray-700 text-white rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
// //               placeholder='Enter your phone number'
// //               name='phone'
// //               value={values.phone}
// //               onChange={change}
// //             />
// //             {errors.phone && (
// //               <div className='text-red-500 text-sm mb-2'>{errors.phone}</div>
// //             )}
// //           </div>
// //           {errors.general && (
// //             <div className='text-red-500 text-sm mb-4'>{errors.general}</div>
// //           )}
// //           <button
// //             type="submit"
// //             className='w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition duration-200'
// //           >
// //             Sign Up
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SignUp;
// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';

// // const SignUp = () => {
// //   const [values, setValues] = useState({
// //     username: "",
// //     email: "",
// //     address: "",
// //     password: "",
// //     phone: "",
// //   });

// //   const [errors, setErrors] = useState({});
// //   const navigate = useNavigate();

// //   const change = (e) => {
// //     const { name, value } = e.target;
// //     if (name === 'phone') {
// //       const formattedValue = value.startsWith('+91') ? value : `+91${value.replace(/^\+91/, '')}`;
// //       setValues({ ...values, [name]: formattedValue });
// //     } else {
// //       setValues({ ...values, [name]: value });
// //     }
// //   };

// //   const validate = () => {
// //     let tempErrors = {};
// //     if (values.username === "") tempErrors.username = "Username is required";
// //     if (values.email === "") {
// //       tempErrors.email = "Email is required";
// //     } else if (!/\S+@\S+\.\S+/.test(values.email)) {
// //       tempErrors.email = "Email is not valid";
// //     }
// //     if (values.address === "") tempErrors.address = "Address is required";

// //     // Validate phone number
// //     const phoneRegex = /^\+91\d{10}$/;
// //     if (!values.phone) {
// //       tempErrors.phone = "Phone number is required";
// //     } else if (!phoneRegex.test(values.phone)) {
// //       tempErrors.phone = "Phone number must be 10 digits long with +91 prefix";
// //     }

// //     // Validate password
// //     const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
// //     if (!values.password) {
// //       tempErrors.password = "Password is required";
// //     } else if (!passwordRegex.test(values.password)) {
// //       tempErrors.password = "Password must be at least 8 characters long, contain at least one uppercase letter and one number.";
// //     }

// //     setErrors(tempErrors);
// //     return Object.keys(tempErrors).length === 0;
// //   };

// //   const submit = async (e) => {
// //     e.preventDefault();
// //     if (validate()) {
// //       try {
// //         const response = await axios.post("http://localhost:8100/api/signup", values);
// //         alert(response.data.message);
// //         navigate("/otp-verification");
// //       } catch (error) {
// //         console.error(error.response ? error.response.data : error.message);
// //         setErrors({ general: "An unexpected error occurred. Please try again." });
// //       }
// //     }
// //   };

// //   return (
// //     <div className='h-screen bg-gray-900 flex items-center justify-center'>
// //       <div className='bg-zinc-800 rounded-lg shadow-lg px-10 py-8 w-full max-w-md'>
// //         <p className='text-2xl font-semibold text-white mb-6'>Sign Up</p>
// //         <form onSubmit={submit}>
// //           <div>
// //             <label htmlFor="username" className='text-gray-400 mb-2 block'>Username</label>
// //             <input
// //               type="text"
// //               className='w-full p-3 bg-gray-700 text-white rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
// //               placeholder='Enter your username'
// //               name='username'
// //               value={values.username}
// //               onChange={change}
// //             />
// //             {errors.username && (
// //               <div className='text-red-500 text-sm mb-2'>{errors.username}</div>
// //             )}
// //           </div>
// //           <div>
// //             <label htmlFor="email" className='text-gray-400 mb-2 block'>Email</label>
// //             <input
// //               type="email"
// //               className='w-full p-3 bg-gray-700 text-white rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
// //               placeholder='Enter your email'
// //               name='email'
// //               value={values.email}
// //               onChange={change}
// //             />
// //             {errors.email && (
// //               <div className='text-red-500 text-sm mb-2'>{errors.email}</div>
// //             )}
// //           </div>
// //           <div>
// //             <label htmlFor="password" className='text-gray-400 mb-2 block'>Password</label>
// //             <input
// //               type="password"
// //               className='w-full p-3 bg-gray-700 text-white rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
// //               placeholder='Enter your password'
// //               name='password'
// //               value={values.password}
// //               onChange={change}
// //             />
// //             {errors.password && (
// //               <div className='text-red-500 text-sm mb-2'>{errors.password}</div>
// //             )}
// //           </div>
// //           <div>
// //             <label htmlFor="address" className='text-gray-400 mb-2 block'>Address</label>
// //             <textarea
// //               name="address"
// //               className='w-full p-3 bg-gray-700 text-white rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
// //               placeholder='Enter your address'
// //               value={values.address}
// //               onChange={change}
// //             />
// //             {errors.address && (
// //               <div className='text-red-500 text-sm mb-2'>{errors.address}</div>
// //             )}
// //           </div>
// //           <div>
// //             <label htmlFor="phone" className='text-gray-400 mb-2 block'>Phone Number</label>
// //             <input
// //               type="text"
// //               className='w-full p-3 bg-gray-700 text-white rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
// //               placeholder='Enter your phone number'
// //               name='phone'
// //               value={values.phone}
// //               onChange={change}
// //             />
// //             {errors.phone && (
// //               <div className='text-red-500 text-sm mb-2'>{errors.phone}</div>
// //             )}
// //           </div>
// //           {errors.general && (
// //             <div className='text-red-500 text-sm mb-4'>{errors.general}</div>
// //           )}
// //           <button
// //             type="submit"
// //             className='w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition duration-200'
// //           >
// //             Sign Up
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SignUp;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const SignUp = () => {
//   const [values, setValues] = useState({
//     username: "",
//     email: "",
//     address: "",
//     password: "",
//     phone: "",
//   });

//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const change = (e) => {
//     const { name, value } = e.target;
//     if (name === 'phone') {
//       const formattedValue = value.startsWith('+91') ? value : `+91${value.replace(/^\+91/, '')}`;
//       setValues({ ...values, [name]: formattedValue });
//     } else {
//       setValues({ ...values, [name]: value });
//     }
//     validate({ ...values, [name]: value });
//   };

//   const validate = (fieldValues = values) => {
//     let tempErrors = { ...errors };

//     if ('username' in fieldValues)
//       tempErrors.username = fieldValues.username ? "" : "Username is required";

//     if ('email' in fieldValues) {
//       tempErrors.email = fieldValues.email ? "" : "Email is required";
//       if (fieldValues.email && !/\S+@\S+\.\S+/.test(fieldValues.email)) {
//         tempErrors.email = "Email is not valid";
//       }
//     }

//     if ('address' in fieldValues)
//       tempErrors.address = fieldValues.address ? "" : "Address is required";

//     if ('phone' in fieldValues) {
//       const phoneRegex = /^\+91\d{10}$/;
//       if (!fieldValues.phone) {
//         tempErrors.phone = "Phone number is required";
//       } else if (!phoneRegex.test(fieldValues.phone)) {
//         tempErrors.phone = "Phone number must be 10 digits long with +91 prefix";
//       } else {
//         tempErrors.phone = "";
//       }
//     }

//     if ('password' in fieldValues) {
//       const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
//       tempErrors.password = fieldValues.password
//         ? passwordRegex.test(fieldValues.password)
//           ? ""
//           : "Password must be at least 8 characters long, contain at least one uppercase letter and one number."
//         : "Password is required";
//     }

//     setErrors({ ...tempErrors });

//     // Return true if no errors
//     return Object.keys(tempErrors).every((key) => tempErrors[key] === "");
//   };

//   const submit = async (e) => {
//     e.preventDefault();
//     if (validate()) {
//       try {
//         const response = await axios.post("http://localhost:8100/api/signup", values);
//         alert(response.data.message);
//         navigate("/otp-verification");
//       } catch (error) {
//         console.error(error.response ? error.response.data : error.message);
//         setErrors({ general: "An unexpected error occurred. Please try again." });
//       }
//     }
//   };

//   return (
//     <div className='h-screen bg-gray-900 flex items-center justify-center'>
//       <div className='bg-zinc-800 rounded-lg shadow-lg px-10 py-8 w-full max-w-md'>
//         <p className='text-2xl font-semibold text-white mb-6'>Sign Up</p>
//         <form onSubmit={submit}>
//           <div>
//             <label htmlFor="username" className='text-gray-400 mb-2 block'>Username</label>
//             <input
//               type="text"
//               className='w-full p-3 bg-gray-700 text-white rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
//               placeholder='Enter your username'
//               name='username'
//               value={values.username}
//               onChange={change}
//             />
//             {errors.username && (
//               <div className='text-red-500 text-sm mb-2'>{errors.username}</div>
//             )}
//           </div>
//           <div>
//             <label htmlFor="email" className='text-gray-400 mb-2 block'>Email</label>
//             <input
//               type="email"
//               className='w-full p-3 bg-gray-700 text-white rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
//               placeholder='Enter your email'
//               name='email'
//               value={values.email}
//               onChange={change}
//             />
//             {errors.email && (
//               <div className='text-red-500 text-sm mb-2'>{errors.email}</div>
//             )}
//           </div>
//           <div>
//             <label htmlFor="password" className='text-gray-400 mb-2 block'>Password</label>
//             <input
//               type="password"
//               className='w-full p-3 bg-gray-700 text-white rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
//               placeholder='Enter your password'
//               name='password'
//               value={values.password}
//               onChange={change}
//             />
//             {errors.password && (
//               <div className='text-red-500 text-sm mb-2'>{errors.password}</div>
//             )}
//           </div>
//           <div>
//             <label htmlFor="address" className='text-gray-400 mb-2 block'>Address</label>
//             <textarea
//               name="address"
//               className='w-full p-3 bg-gray-700 text-white rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
//               placeholder='Enter your address'
//               value={values.address}
//               onChange={change}
//             />
//             {errors.address && (
//               <div className='text-red-500 text-sm mb-2'>{errors.address}</div>
//             )}
//           </div>
//           <div>
//             <label htmlFor="phone" className='text-gray-400 mb-2 block'>Phone Number</label>
//             <input
//               type="text"
//               className='w-full p-3 bg-gray-700 text-white rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
//               placeholder='Enter your phone number'
//               name='phone'
//               value={values.phone}
//               onChange={change}
//             />
//             {errors.phone && (
//               <div className='text-red-500 text-sm mb-2'>{errors.phone}</div>
//             )}
//           </div>
//           {errors.general && (
//             <div className='text-red-500 text-sm mb-4'>{errors.general}</div>
//           )}
//           <button
//             type="submit"
//             className='w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition duration-200'
//           >
//             Sign Up
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
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
        const response = await axios.post("http://localhost:8100/api/signup", values);
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
