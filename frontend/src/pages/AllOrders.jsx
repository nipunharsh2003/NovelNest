// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Loader from '../components/Loader/Loader';
// import { FaUserLarge } from "react-icons/fa6";
// import { Link } from 'react-router-dom';

// const AllOrders = () => {
//   const [ Options, setOptions] = useState();
//   const [allOrders, setAllOrders] = useState();
//   const [Values ,setValues] = useState();
//   const headers = {
//     id: localStorage.getItem("id"),
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//   };

//   useEffect(() => {
//     const fetch = async () => {
//       const response = await axios.get('http://localhost:8100/api/get-all-orders', { headers });
//       setAllOrders(response.data.data);
//     };
//     fetch();
   
//   }, [AllOrders]);
//   const change = (e) => {
//     const {value} = e.target;
//     setValues({status: value});
//   };
//   const setOptionsButton = (i) =>{
//     const id = OrderHistory[i]._id;
//     const respons = await axios.put(
//       'https://localhost:8100/api/update-status/${id}',
//       Values,{headers}
//     )
//     console.log(response);
//   };
//   AllOrders && AllOrders.splice(AllOrders.lenght -1, 1);

//   return (
//     <>
//       {!allOrders && (<div className='h-[100%] flex items-center justify-center'><Loader /></div>)}

//       {allOrders && allOrders.length > 0 && (
//         <div className='h-[100%] p-0 md:p-4 text-zinc-100'>
//           <h1 className='text-3xl md:text-5xl font-semibold text-zinc-500 mb-8'>All Orders</h1>

//           <div className='mt-4 bg-zinc-800 w-full rounded py-2 px-4 flex gap-2'>
//             <div className='w-[3%]'><h1 className='text-center'>Sr.</h1></div>
//             <div className='md:w-[22%] w-[40%]'><h1>Books</h1></div>
//             <div className='md:w-[45%] w-0 hidden md:block'><h1>Description</h1></div>
//             <div className='md:w-[9%] w-[17%]'><h1>Price</h1></div>
//             <div className='md:w-[16%] w-[30%]'><h1>Status</h1></div>
//             <div className=''><h1><FaUserLarge /></h1></div>
//           </div>

//           {/* Here you can map through the orders and render them */}
//           {AllOrders.map((items, i) => (
//             <div  className='bg-zinc-800 w-full rounded py-2 px-4 flex gap-2 hover:bg-zinc-900 hover:cursor-pointer transition-all duration-300 '>

//               <div className='w-[3%]'><h1 className='text-center'>{i + 1}</h1></div>

//               <div className='md:w-[22%] w-[40%]'>
//                 <Link to={`/view-book-details/${items.book._id}`}
//                 className='hover:text-blue-300'>
//                 {items.book.title}
//                 </Link>
//               </div>
//               <div className='md:w-[45%] w-0 hidden md:block'><h1 className=''>{items.book.description.slice(0, 50)}...</h1>

//               </div>
//               <div className='md:w-[9%] w-[17%]'><h1>₹{items.book.price}</h1></div>

//               <div className='md:w-[16%] w-[30%]'>
//                 <h1 className='font-semibold'     >
                  
// <button className='hover:scale-105 transition-all duration-300' onClick={() => setOptions(i)}>
//   {items.status === "Order place" ? (
//     <div className='text-yellow-500'>
//       {items.status}</div>
//   ) : items.status === "Cancelled" ? (
//     <div className='text-red-500'>
//       {itms.status}
//     </div>

//   ) : (
//     <div className='text-green-500'>
//       {items.status}
//     </div>

//   )}

// </button>
// <div className=`{option === i ? "flex : "block"}`>
//   <select name="status" id="" className=' bg-gray-800' onChange={change} value = {Values.status}>
//     {{
//       "Order place",
//       "Out of deleivery",
//       "delivered",
//       "Cancelled",
//     }}.map((items, i)=>(<option value={items} key={i}>
//       {items}
//       </option>))}
//       </select>
//       <button className='text-green-500 hover:text-pink-600 mx-2' onClick={()=>{
//         setOptions(-1);
//         submitChnages(i);
//       }}><FacCheck />></button>

// </div>
//                 </h1>
//               </div>
//               <div className='w-[10%] md:w-[5%]'><h1><FaUserLarge /></h1></div>

//             </div>
//           ))}
//         </div>
//       )}
//     </>
//   );
// };

// export default AllOrders;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../components/Loader/Loader';
import { FaUserLarge, FaCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const AllOrders = () => {
  const [option, setOption] = useState(-1);
  const [allOrders, setAllOrders] = useState([]);
  const [values, setValues] = useState({ status: "" });

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:8100/api/get-all-orders', { headers });
        setAllOrders(response.data.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setValues({ status: value });
  };

  const submitChanges = async (i) => {
    try {
      const id = allOrders[i]._id;
      const response = await axios.put(`http://localhost:8100/api/update-status/${id}`, values, { headers });
      console.log(response);
      setOption(-1); // Reset option after submitting changes
      // Update the order status in the state
      const updatedOrders = [...allOrders];
      updatedOrders[i].status = values.status;
      setAllOrders(updatedOrders);
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  return (
    <>
      {!allOrders.length && (<div className='h-[100%] flex items-center justify-center'><Loader /></div>)}

      {allOrders.length > 0 && (
        <div className='h-[100%] p-0 md:p-4 text-zinc-100'>
          <h1 className='text-3xl md:text-5xl font-semibold text-zinc-500 mb-8'>All Orders</h1>

          <div className='mt-4 bg-zinc-800 w-full rounded py-2 px-4 flex gap-2'>
            <div className='w-[3%]'><h1 className='text-center'>Sr.</h1></div>
            <div className='md:w-[22%] w-[40%]'><h1>Books</h1></div>
            <div className='md:w-[45%] w-0 hidden md:block'><h1>Description</h1></div>
            <div className='md:w-[9%] w-[17%]'><h1>Price</h1></div>
            <div className='md:w-[16%] w-[30%]'><h1>Status</h1></div>
            <div className=''><h1><FaUserLarge /></h1></div>
          </div>

          {allOrders.map((items, i) => (
            items && items.book && (
              <div key={items._id} className='bg-zinc-800 w-full rounded py-2 px-4 flex gap-2 hover:bg-zinc-900 hover:cursor-pointer transition-all duration-300'>
                <div className='w-[3%]'><h1 className='text-center'>{i + 1}</h1></div>

                <div className='md:w-[22%] w-[40%]'>
                  <Link to={`/view-book-details/${items.book._id}`} className='hover:text-blue-300'>
                    {items.book.title}
                  </Link>
                </div>
                <div className='md:w-[45%] w-0 hidden md:block'>
                  <h1>{items.book.description.slice(0, 50)}...</h1>
                </div>
                <div className='md:w-[9%] w-[17%]'><h1>₹{items.book.price}</h1></div>

                <div className='md:w-[16%] w-[30%]'>
                  <button className='hover:scale-105 transition-all duration-300' onClick={() => setOption(i)}>
                    {items.status === "Order placed" ? (
                      <div className='text-yellow-500'>{items.status}</div>
                    ) : items.status === "Cancelled" ? (
                      <div className='text-red-500'>{items.status}</div>
                    ) : (
                      <div className='text-green-500'>{items.status}</div>
                    )}
                  </button>
                  {option === i && (
                    <div className='flex'>
                      <select name="status" className='bg-gray-800' onChange={handleChange} value={values.status}>
                        {["Order placed", "Out for delivery", "Delivered", "Cancelled"].map((status, index) => (
                          <option value={status} key={index}>{status}</option>
                        ))}
                      </select>
                      <button className='text-green-500 hover:text-pink-600 mx-2' onClick={() => submitChanges(i)}>
                        <FaCheck />
                      </button>
                    </div>
                  )}
                </div>
                <div className='w-[10%] md:w-[5%]'><h1><FaUserLarge /></h1></div>
              </div>
            )
          ))}
        </div>
      )}
    </>
  );
};

export default AllOrders;
