
import axios from 'axios';
import Loader from "../Loader/Loader";
import { Link, useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { useState, useEffect } from 'react';

const stripePromise = loadStripe('pk_test_51Pj1w2BqjnFp5nQHyeEvJYpeS3EvUKDcx9rSz6rtnypcat6dWQK7rDx6tbRKiqAnsFKUhCNN6SzAR9ctXd6BbaRg001vlOpq3n');

const UserOrderHistory = () => {
  const [OrderHistory, setOrderHistory] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        const response = await axios.post("http://localhost:8100/api/get-order-history", {}, { headers });
        setOrderHistory(response.data.data);
      } catch (error) {
        console.error('Error fetching order history:', error);
      }
    };
    fetchOrderHistory();
  }, []);

  const handleSelectItem = (itemId) => {
    setSelectedItems(prevSelectedItems => {
      if (prevSelectedItems.includes(itemId)) {
        return prevSelectedItems.filter(id => id !== itemId);
      } else {
        return [...prevSelectedItems, itemId];
      }
    });
  };

  const handleRemove = (orderId) => {
    setOrderHistory(prevOrderHistory => prevOrderHistory.filter(order => order._id !== orderId));
    setSelectedItems(prevSelectedItems => prevSelectedItems.filter(id => id !== orderId));
    navigate('/');
  };

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;

      if (selectedItems.length === 0) {
        alert("Please select at least one order to proceed with payment.");
        return;
      }

      // Fetch Checkout Session ID from backend
      const response = await axios.post("http://localhost:8100/api/create-checkout-session", { orderIds: selectedItems }, { headers });

      const { sessionId } = response.data;

      // Redirect to Stripe Checkout
      const { error } = await stripe.redirectToCheckout({
        sessionId,
      });

      if (error) {
        console.error("Error redirecting to Stripe checkout:", error);
      }
    } catch (error) {
      console.error("Error handling payment:", error);
    }
  };

  const totalPrice = OrderHistory
    .filter(item => selectedItems.includes(item._id))
    .reduce((sum, item) => sum + item.book.price, 0);

  return (
    <>
      {!OrderHistory && <div className='flex items-center justify-center h-[100%]'><Loader /></div>}
      {OrderHistory && OrderHistory.length === 0 && (
        <div className='h-[80vh] p-4 text-zinc-100'>
          <div className='h-[100%] flex flex-col items-center justify-center'>
            <h1 className='text-5xl font-semibold text-zinc-500 mb-8'>No Order History</h1>
            <img src="https://cdn-icons-png.flaticon.com/128/9961/9961218.png" alt="no order" className='h-[20vh] mb-8' />
          </div>
        </div>
      )}
      {OrderHistory && OrderHistory.length > 0 && (
        <div className='h-[100%] p-0 md:p-4 text-zinc-100'>
          <h1 className='text-3xl md:text-5xl font-semibold text-zinc-500 mb-8'>Your Order History</h1>
          <div className='mt-4 bg-zinc-800 w-full rounded py-2 px-4 flex gap-2'>
            <div className='w-[3%]'><h1 className='text-center'>Sr.</h1></div>
            <div className='w-[5%]'><h1>Select</h1></div>
            <div className='w-[22%]'><h1>Books</h1></div>
            <div className='w-[45%]'><h1>Description</h1></div>
            <div className='w-[9%]'><h1>Price</h1></div>
            <div className='w-[16%]'><h1>Status</h1></div>
            <div className='w-[5%] hidden md:block'><h1>Mode</h1></div>
            <div className='w-[5%] hidden md:block'><h1>Action</h1></div>
          </div>
          {OrderHistory.map((items, i) => (
            <div key={items._id} className='bg-zinc-800 w-full rounded py-2 px-4 flex gap-4 hover:bg-zinc-900 hover:cursor-pointer items-center transition-all duration-300'>
              <div className='w-[3%]'><h1 className='text-center'>{i + 1}</h1></div>
              <div className='w-[5%]'>
                <input
                  type="checkbox"
                  checked={selectedItems.includes(items._id)}
                  onChange={() => handleSelectItem(items._id)}
                />
              </div>
              <div className='w-[22%]'>
                <Link to={`/view-book-details/${items.book._id}`} className="hover:text-blue-300">{items.book.title}</Link>
              </div>
              <div className='w-[45%]'><h1>{items.book.description.slice(0, 50)} ...</h1></div>
              <div className='w-[9%]'><h1>Rs. {items.book.price}</h1></div>
              <div className='w-[16%]'>
                <h1 className={`font-semibold ${items.status === "cancelled" ? 'text-red-500' : items.status === "Order placed" ? 'text-yellow-500' : 'text-green-500'}`}>
                  {items.status}
                </h1>
              </div>
              <div className='w-[5%] hidden md:block'><h1>COD</h1></div>
              <div className='w-[5%] hidden md:flex flex-col items-center'>
                {!selectedItems.includes(items._id) && items.status !== "Paid" && (
                  <>
                    <button className="text-blue-400 hover:text-blue-500 mb-2" onClick={() => handleSelectItem(items._id)}>
                      Pay Now
                    </button>
                    <button className="text-red-400 hover:text-red-500" onClick={() => handleRemove(items._id)}>
                      Remove
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
          <div className='mt-8 flex justify-between items-center'>
            <h2 className='text-2xl font-semibold'>Total Price: Rs. {totalPrice}</h2>
            <button
              className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600"
              onClick={handlePayment}
              disabled={selectedItems.length === 0}
            >
              Pay Now
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default UserOrderHistory;
// import axios from 'axios';
// import Loader from "../Loader/Loader";
// import { Link, useNavigate } from 'react-router-dom';
// import { loadStripe } from '@stripe/stripe-js';
// import { useState, useEffect } from 'react';

// const stripePromise = loadStripe('pk_test_51Pj1w2BqjnFp5nQHyeEvJYpeS3EvUKDcx9rSz6rtnypcat6dWQK7rDx6tbRKiqAnsFKUhCNN6SzAR9ctXd6BbaRg001vlOpq3n');

// const UserOrderHistory = () => {
//   const [orderHistory, setOrderHistory] = useState([]);
//   const [selectedItems, setSelectedItems] = useState([]);
//   const navigate = useNavigate();
//   const headers = {
//     id: localStorage.getItem("id"),
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//   };

//   useEffect(() => {
//     const fetchOrderHistory = async () => {
//       try {
//         const response = await axios.post("http://localhost:8100/api/get-order-history", {}, { headers });
//         setOrderHistory(response.data.data);
//       } catch (error) {
//         console.error('Error fetching order history:', error);
//       }
//     };
//     fetchOrderHistory();
//   }, []);

//   const handleSelectItem = (itemId) => {
//     setSelectedItems(prevSelectedItems => {
//       if (prevSelectedItems.includes(itemId)) {
//         return prevSelectedItems.filter(id => id !== itemId);
//       } else {
//         return [...prevSelectedItems, itemId];
//       }
//     });
//   };

//   const handleRemove = (orderId) => {
//     setOrderHistory(prevOrderHistory => prevOrderHistory.filter(order => order._id !== orderId));
//     setSelectedItems(prevSelectedItems => prevSelectedItems.filter(id => id !== orderId));
//     navigate('/');
//   };

//   const handlePayment = async () => {
//     try {
//       const stripe = await stripePromise;

//       if (selectedItems.length === 0) {
//         alert("Please select at least one order to proceed with payment.");
//         return;
//       }

//       const response = await axios.post("http://localhost:8100/api/create-checkout-session", { orderIds: selectedItems }, { headers });

//       const { sessionId } = response.data;

//       const { error } = await stripe.redirectToCheckout({
//         sessionId,
//       });

//       if (error) {
//         console.error("Error redirecting to Stripe checkout:", error);
//       }
//     } catch (error) {
//       console.error("Error handling payment:", error);
//     }
//   };

//   const totalPrice = orderHistory
//     .filter(item => selectedItems.includes(item._id))
//     .reduce((sum, item) => sum + item.book.price, 0);

//   return (
//     <div className='bg-gray-900 min-h-screen p-4 md:p-8'>
//       {!orderHistory.length ? (
//         <div className='flex items-center justify-center h-full'>
//           <Loader />
//         </div>
//       ) : orderHistory.length === 0 ? (
//         <div className='h-[80vh] flex flex-col items-center justify-center'>
//           <h1 className='text-4xl font-semibold text-gray-500 mb-4'>No Order History</h1>
//           <img src="https://cdn-icons-png.flaticon.com/128/9961/9961218.png" alt="No order" className='h-[20vh]' />
//         </div>
//       ) : (
//         <div>
//           <h1 className='text-3xl md:text-4xl font-semibold text-gray-100 mb-8'>Your Order History</h1>
//           <div className='bg-gray-800 rounded-lg shadow-lg'>
//             <div className='grid grid-cols-1 md:grid-cols-7 gap-4 p-4 text-gray-300 font-semibold border-b border-gray-700'>
//               <div className='text-center'>#</div>
//               <div className='text-center'>Select</div>
//               <div>Books</div>
//               <div>Description</div>
//               <div className='text-center'>Price</div>
//               <div className='text-center'>Status</div>
//               <div className='hidden md:block text-center'>Action</div>
//             </div>
//             {orderHistory.map((item, i) => (
//               <div key={item._id} className='grid grid-cols-1 md:grid-cols-7 gap-4 p-4 border-b border-gray-700 hover:bg-gray-700 transition-colors duration-300'>
//                 <div className='flex items-center justify-center'>{i + 1}</div>
//                 <div className='flex items-center justify-center'>
//                   <input
//                     type="checkbox"
//                     checked={selectedItems.includes(item._id)}
//                     onChange={() => handleSelectItem(item._id)}
//                     className='form-checkbox h-5 w-5'
//                   />
//                 </div>
//                 <div>
//                   <Link to={`/view-book-details/${item.book._id}`} className="text-blue-400 hover:text-blue-300">{item.book.title}</Link>
//                 </div>
//                 <div>{item.book.description.slice(0, 50)} ...</div>
//                 <div className='text-center'>Rs. {item.book.price}</div>
//                 <div className={`text-center ${item.status === "cancelled" ? 'text-red-500' : item.status === "Order placed" ? 'text-yellow-500' : 'text-green-500'}`}>
//                   {item.status}
//                 </div>
//                 <div className='hidden md:flex flex-col items-center'>
//                   {!selectedItems.includes(item._id) && item.status !== "Paid" && (
//                     <>
//                       <button className="text-blue-400 hover:text-blue-300 mb-2" onClick={() => handleSelectItem(item._id)}>
//                         Pay Now
//                       </button>
//                       <button className="text-red-400 hover:text-red-300" onClick={() => handleRemove(item._id)}>
//                         Remove
//                       </button>
//                     </>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className='mt-8 flex flex-col md:flex-row justify-between items-center p-4'>
//             <h2 className='text-2xl font-semibold text-gray-100 mb-4 md:mb-0'>Total Price: Rs. {totalPrice}</h2>
//             <button
//               className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 disabled:bg-gray-500 transition-colors duration-300"
//               onClick={handlePayment}
//               disabled={selectedItems.length === 0}
//             >
//               Pay Now
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserOrderHistory;
