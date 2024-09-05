
// import axios from "axios";
// import { AiFillDelete } from "react-icons/ai";
// import { useNavigate } from "react-router-dom";
// import { loadStripe } from '@stripe/stripe-js';
// import { useState } from "react";
// import { useEffect } from "react";
// import Loader from "../components/Loader/Loader";

// const Cart = () => {
//   const navigate = useNavigate();
//   const [Cart, setCart] = useState([]);
//   const [Total, setTotal] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const headers = {
//     id: localStorage.getItem("id"),
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//   };

//   useEffect(() => {
//     const fetchCart = async () => {
//       try {
//         const res = await axios.get("http://localhost:8100/api/get-user-cart", { headers });
//         setCart(res.data.data);
//         setLoading(false); // Data fetching completed
//       } catch (error) {
//         console.error("Error fetching cart data:", error);
//         setLoading(false); // Data fetching completed even if it failed
//       }
//     };
//     fetchCart();
//   }, []);

//   const deleteItem = async (bookid) => {
//     try {
//       const response = await axios.put(`http://localhost:8100/api/remove-from-cart/${bookid}`, {}, { headers });
//       if (response.data.message === "Expected condition") {
//         alert("Item removed from cart successfully");
//         setCart(Cart.filter((item) => item._id !== bookid)); // Update the cart state
//       } else {
//         alert(response.data.message);
//       }
//     } catch (error) {
//       console.error("Error removing item:", error);
//     }
//   };

//   useEffect(() => {
//     if (Cart && Cart.length > 0) {
//       let total = 0;
//       Cart.forEach((item) => {
//         total += item.price;
//       });
//       setTotal(total);
//     }
//   }, [Cart]);

//   const placeOrder = async () => {
//     try {
//       const response = await axios.post("http://localhost:8100/api/place-order", { order: Cart }, { headers });
//       alert("Order placed successfully");
//       navigate("/Profile/orderHistory");
//       console.log(response.data.data);
//     } catch (error) {
//       console.error("Error placing order:", error);
//     }
//   };

//   const MakePayment = async () => {
//     const stripe = await loadStripe("pk_test_51Pj1w2BqjnFp5nQHyeEvJYpeS3EvUKDcx9rSz6rtnypcat6dWQK7rDx6tbRKiqAnsFKUhCNN6SzAR9ctXd6BbaRg001vlOpq3n");
//     const body = {
//       products: Cart
//     };
//     const headers = {
//       "Content-Type": "application/json"
//     };
//     try {
//       const response = await fetch(`http://localhost:8100/api/create-checkout-session`, {
//         method: "POST",
//         headers: headers,
//         body: JSON.stringify(body),
//       });
//       const session = await response.json();
//       const result = await stripe.redirectToCheckout({
//         sessionId: session.id
//       });
//       if (result.error) {
//         console.log(result.error);
//       }
//     } catch (error) {
//       console.error("Error creating checkout session:", error);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="w-full h-[100%] flex items-center justify-center">
//         <Loader />
//       </div>
//     );
//   }

//   if (!Cart.length) {
//     return (
//       <div className="h-screen">
//         <div className="h-[100%] flex items-center justify-center flex-col">
//           <h1 className="text-5xl lg:text-6xl font-semibold text-zinc-500">
//             Empty Cart
//           </h1>
//           <img src="./images.png" alt="empty cart" className="lg:h-[50vh]" />
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-zinc-1 px-12 h-screen py-8">
//       <h1 className="text-5xl font-semibold text-zinc-500 mb-8">
//         Your Cart
//       </h1>
//       {Cart.map((items, i) => (
//         <div
//           className="w-full my-4 rounded flex flex-col md:flex-row p-4 bg-zinc-800 justify-between items-center"
//           key={i}
//         >
//           <img
//             src={items.url}
//             alt="/"
//             className="h-[20vh] md:h-[10vh] object-cover"
//           />
//           <div className="w-full md:w-auto">
//             <h1 className="text-2xl lg:text-3xl font-semibold text-start mt-2 md:mt-0">
//               {items.title}
//             </h1>
//             <p className="text-normal lg:text-xl text-zinc-300 mt-2 hidden lg:block">
//               {items.description.slice(0, 100)}...
//             </p>
//             <p className="text-normal lg:text-xl text-zinc-300 mt-2 hidden md:block md:lg:hidden">
//               {items.description.slice(0, 65)}...
//             </p>
//             <p className="text-normal text-zinc-300 mt-2 block md:hidden">
//               {items.description.slice(0, 100)}...
//             </p>
//           </div>
//           <div className="flex mt-4 w-full md:w-auto items-center justify-between">
//             <h2 className="text-zinc-100 text-3xl font-semibold flex">
//               ₹{items.price}
//             </h2>
//             <button
//               className="bg-red-100 text-red-700 border border-red-700 rounded p-2 ml-12"
//               onClick={() => deleteItem(items._id)}
//             >
//               <AiFillDelete />
//             </button>
//           </div>
//         </div>
//       ))}
//       <div className="mt-4 w-full flex items-center justify-end">
//         <div className="p-4 bg-zinc-800 rounded">
//           <h1 className="text-3xl text-zinc-200 font-semibold">
//             Total Amount
//           </h1>
//           <div className="mt-3 flex items-center justify-between text-xl text-zinc-200">
//             <h2>{Cart.length} books</h2>
//             <h2>₹{Total}</h2>
//           </div>
//           <div className="w-[100%] mt-3 flex justify-between">
//             <button
//               className="bg-zinc-100 rounded px-4 py-2 flex justify-center w-full font-semibold hover:bg-zinc-500 mr-4"
//               onClick={placeOrder}
//             >
//               Place your order
//             </button>
//             {/* Removed Pay button */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { loadStripe } from '@stripe/stripe-js';
import { useState, useEffect } from "react";
import Loader from "../components/Loader/Loader";

const Cart = () => {
  const navigate = useNavigate();
  const [Cart, setCart] = useState([]);
  const [Total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await axios.get("http://localhost:8100/api/get-user-cart", { headers });
        setCart(res.data.data);
        setLoading(false); // Data fetching completed
      } catch (error) {
        console.error("Error fetching cart data:", error);
        setLoading(false); // Data fetching completed even if it failed
      }
    };
    fetchCart();
  }, []);

  const deleteItem = async (bookid) => {
    try {
      const response = await axios.put(`http://localhost:8100/api/remove-from-cart/${bookid}`, {}, { headers });
      if (response.data.message === "Expected condition") {
        alert("Item removed from cart successfully");
        setCart(Cart.filter((item) => item._id !== bookid)); // Update the cart state
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  useEffect(() => {
    if (Cart && Cart.length > 0) {
      let total = 0;
      Cart.forEach((item) => {
        total += item.price;
      });
      setTotal(total);
    }
  }, [Cart]);

  const placeOrder = async () => {
    try {
      const response = await axios.post("http://localhost:8100/api/place-order", { order: Cart }, { headers });
      alert("Order placed successfully");
      navigate("/Profile/orderHistory");
      console.log(response.data.data);
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  const MakePayment = async () => {
    const stripe = await loadStripe("pk_test_51Pj1w2BqjnFp5nQHyeEvJYpeS3EvUKDcx9rSz6rtnypcat6dWQK7rDx6tbRKiqAnsFKUhCNN6SzAR9ctXd6BbaRg001vlOpq3n");
    const body = {
      products: Cart
    };
    const headers = {
      "Content-Type": "application/json"
    };
    try {
      const response = await fetch(`http://localhost:8100/api/create-checkout-session`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      });
      const session = await response.json();
      const result = await stripe.redirectToCheckout({
        sessionId: session.id
      });
      if (result.error) {
        console.log(result.error);
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gray-100">
        <Loader />
      </div>
    );
  }

  if (!Cart.length) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl lg:text-5xl font-semibold text-gray-600 mb-4">
          Your Cart is Empty
        </h1>
        <img src="./images.png" alt="empty cart" className="w-1/2 lg:w-1/3" />
      </div>
    );
  }

  return (
    <div className="bg-gray-50 px-4 lg:px-12 py-8 h-screen">
      <h1 className="text-3xl lg:text-4xl font-semibold text-gray-700 mb-8">
        Your Cart
      </h1>
      {Cart.map((items, i) => (
        <div
          className="bg-white shadow-lg rounded-lg overflow-hidden mb-6 flex flex-col md:flex-row p-4 md:p-6 items-center"
          key={i}
        >
          <img
            src={items.url}
            alt={items.title}
            className="w-full md:w-48 h-32 md:h-48 object-cover rounded-md"
          />
          <div className="w-full md:w-2/3 md:ml-6 mt-4 md:mt-0">
            <h2 className="text-xl lg:text-2xl font-semibold text-gray-800">
              {items.title}
            </h2>
            <p className="text-gray-600 mt-2 hidden lg:block">
              {items.description.slice(0, 100)}...
            </p>
            <p className="text-gray-600 mt-2 lg:hidden">
              {items.description.slice(0, 65)}...
            </p>
          </div>
          <div className="flex mt-4 w-full md:w-auto items-center justify-between md:justify-start">
            <h2 className="text-xl lg:text-2xl font-semibold text-gray-800">
              ₹{items.price}
            </h2>
            <button
              className="bg-red-500 text-white rounded px-4 py-2 ml-0 md:ml-4 hover:bg-red-600 transition"
              onClick={() => deleteItem(items._id)}
            >
              <AiFillDelete className="inline-block" />
            </button>
          </div>
        </div>
      ))}
      <div className="mt-8 bg-white shadow-lg p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Total Amount
        </h2>
        <div className="flex justify-between text-lg text-gray-700">
          <span>{Cart.length} {Cart.length === 1 ? 'book' : 'books'}</span>
          <span>₹{Total}</span>
        </div>
        <button
          className="mt-4 bg-blue-600 text-white rounded px-6 py-3 w-full hover:bg-blue-700 transition"
          onClick={placeOrder}
        >
          Place Your Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
// import React from 'react';
// import axios from 'axios';
// import { AiFillDelete, AiOutlineShoppingCart } from 'react-icons/ai';
// import { useNavigate } from 'react-router-dom';
// import { loadStripe } from '@stripe/stripe-js';
// import { useState, useEffect } from 'react';
// import Loader from '../components/Loader/Loader';

// const Cart = () => {
//   const navigate = useNavigate();
//   const [Cart, setCart] = useState([]);
//   const [Total, setTotal] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const headers = {
//     id: localStorage.getItem('id'),
//     authorization: `Bearer ${localStorage.getItem('token')}`,
//   };

//   useEffect(() => {
//     const fetchCart = async () => {
//       try {
//         const res = await axios.get('http://localhost:8100/api/get-user-cart', { headers });
//         setCart(res.data.data);
//         setLoading(false); // Data fetching completed
//       } catch (error) {
//         console.error('Error fetching cart data:', error);
//         setLoading(false); // Data fetching completed even if it failed
//       }
//     };
//     fetchCart();
//   }, []);

//   const deleteItem = async (bookid) => {
//     try {
//       const response = await axios.put(`http://localhost:8100/api/remove-from-cart/${bookid}`, {}, { headers });
//       if (response.data.message === 'Expected condition') {
//         alert('Item removed from cart successfully');
//         setCart(Cart.filter((item) => item._id !== bookid)); // Update the cart state
//       } else {
//         alert(response.data.message);
//       }
//     } catch (error) {
//       console.error('Error removing item:', error);
//     }
//   };

//   useEffect(() => {
//     if (Cart && Cart.length > 0) {
//       let total = 0;
//       Cart.forEach((item) => {
//         total += item.price;
//       });
//       setTotal(total);
//     }
//   }, [Cart]);

//   const placeOrder = async () => {
//     try {
//       const response = await axios.post('http://localhost:8100/api/place-order', { order: Cart }, { headers });
//       alert('Order placed successfully');
//       navigate('/Profile/orderHistory');
//       console.log(response.data.data);
//     } catch (error) {
//       console.error('Error placing order:', error);
//     }
//   };

//   const MakePayment = async () => {
//     const stripe = await loadStripe('pk_test_51Pj1w2BqjnFp5nQHyeEvJYpeS3EvUKDcx9rSz6rtnypcat6dWQK7rDx6tbRKiqAnsFKUhCNN6SzAR9ctXd6BbaRg001vlOpq3n');
//     const body = {
//       products: Cart
//     };
//     const headers = {
//       'Content-Type': 'application/json'
//     };
//     try {
//       const response = await fetch('http://localhost:8100/api/create-checkout-session', {
//         method: 'POST',
//         headers: headers,
//         body: JSON.stringify(body),
//       });
//       const session = await response.json();
//       const result = await stripe.redirectToCheckout({
//         sessionId: session.id
//       });
//       if (result.error) {
//         console.log(result.error);
//       }
//     } catch (error) {
//       console.error('Error creating checkout session:', error);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="w-full h-screen flex items-center justify-center bg-gray-100">
//         <Loader />
//       </div>
//     );
//   }

//   if (!Cart.length) {
//     return (
//       <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
//         <h1 className="text-4xl lg:text-5xl font-semibold text-gray-600 mb-4">
//           Your Cart is Empty
//         </h1>
//         <AiOutlineShoppingCart className="text-gray-400 text-6xl" />
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-50 px-4 lg:px-12 py-8 h-screen">
//       <h1 className="text-3xl lg:text-4xl font-semibold text-gray-700 mb-8">
//         Your Cart
//       </h1>
//       {Cart.map((item, i) => (
//         <div
//           className="bg-white shadow-lg rounded-lg overflow-hidden mb-6 flex flex-col md:flex-row p-4 md:p-6 items-center"
//           key={i}
//         >
//           <AiOutlineShoppingCart className="w-full md:w-48 h-32 md:h-48 object-cover rounded-md text-gray-500 text-4xl md:text-6xl" />
//           <div className="w-full md:w-2/3 md:ml-6 mt-4 md:mt-0">
//             <h2 className="text-xl lg:text-2xl font-semibold text-gray-800">
//               {item.title}
//             </h2>
//             <p className="text-gray-600 mt-2 hidden lg:block">
//               {item.description.slice(0, 100)}...
//             </p>
//             <p className="text-gray-600 mt-2 lg:hidden">
//               {item.description.slice(0, 65)}...
//             </p>
//           </div>
//           <div className="flex mt-4 w-full md:w-auto items-center justify-between md:justify-start">
//             <h2 className="text-xl lg:text-2xl font-semibold text-gray-800">
//               ₹{item.price}
//             </h2>
//             <button
//               className="bg-red-500 text-white rounded px-4 py-2 ml-0 md:ml-4 hover:bg-red-600 transition"
//               onClick={() => deleteItem(item._id)}
//             >
//               <AiFillDelete className="inline-block" />
//             </button>
//           </div>
//         </div>
//       ))}
//       <div className="mt-8 bg-white shadow-lg p-6 rounded-lg">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//           Total Amount
//         </h2>
//         <div className="flex justify-between text-lg text-gray-700">
//           <span>{Cart.length} {Cart.length === 1 ? 'book' : 'books'}</span>
//           <span>₹{Total}</span>
//         </div>
//         <button
//           className="mt-4 bg-blue-600 text-white rounded px-6 py-3 w-full hover:bg-blue-700 transition"
//           onClick={placeOrder}
//         >
//           Place Your Order
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Cart;
