
import React from 'react';
import { Link } from "react-router-dom";
import axios from "axios";


const BookCard = ({ data, favourites }) => {
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
    bookid: data._id,
  };
  const handleRemoveBook = async () => {
    const response = await axios.put(
      "http://localhost:8100/api/delete-book-from-favourites",{},
     
      { headers }
    );
    alert(response.data.message);
  };
 


  return (
   <div className='bg-zinc-800 rounded p-4 flex flex-col'>
    <Link to={`/view-book-details/${data._id}`} ><div className='bg-zinc-800 p-4'>
    <div className='bg-zinc-900 rounded flex items-center justify-center'><img src={data.url} alt="images" className='h-[25vh]'></img></div>
    <h2 className='mt-4 text-xl text-white font-semibold'>  {data.title}</h2>
    <p className='mt-2 text-zinc-400 font-semibold'> by {data.author}</p>

    <p className='mt-2 text-zinc-200 font-semibold text-xl' >₹{data.price}</p>
 
    </div>
      </Link>
      {favourites && (
          <button className='bg-yellow-50 text-xl px-4 py-2 ronded border border-yellow-500 text-yellow-500 mt-4' onClick={handleRemoveBook}>remove from favourites</button>
      )}
    


  </div>


    );
}

export default BookCard;

// import React from 'react';
// import { Link } from "react-router-dom";
// import axios from "axios";

// const BookCard = ({ data, favourites }) => {
//   const headers = {
//     id: localStorage.getItem("id"),
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//     bookid: data._id,
//   };

//   const handleRemoveBook = async () => {
//     const response = await axios.put(
//       "http://localhost:8100/api/delete-book-from-favourites", {},
//       { headers }
//     );
//     alert(response.data.message);
//   };

//   return (
//     <div className='bg-zinc-800 rounded p-4 flex flex-col'>
//       <Link to={`/view-book-details/${data._id}`}>
//         <div className='bg-zinc-800 p-4'>
//           <div className='bg-zinc-900 rounded flex items-center justify-center overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
//             <img src={data.url} alt="images" className='h-[25vh] transform transition-transform duration-300 hover:scale-110' />
//           </div>
//           <h2 className='mt-4 text-xl text-white font-semibold'>{data.title}</h2>
//           <p className='mt-2 text-zinc-400 font-semibold'>by {data.author}</p>
//           <p className='mt-2 text-zinc-200 font-semibold text-xl'>₹{data.price}</p>
//         </div>
//       </Link>
//       {favourites && (
//         <button className='bg-yellow-50 text-xl px-4 py-2 rounded border border-yellow-500 text-yellow-500 mt-4' onClick={handleRemoveBook}>
//           Remove from Favourites
//         </button>
//       )}
//     </div>
//   );
// };

// export default BookCard;
// // import React from 'react';
// // import { Link } from "react-router-dom";
// // import axios from "axios";

// // const BookCard = ({ data, favourites }) => {
// //   const headers = {
// //     id: localStorage.getItem("id"),
// //     authorization: `Bearer ${localStorage.getItem("token")}`,
// //     bookid: data._id,
// //   };

// //   const handleRemoveBook = async () => {
// //     const response = await axios.put(
// //       "http://localhost:8100/api/delete-book-from-favourites", {},
// //       { headers }
// //     );
// //     alert(response.data.message);
// //   };

// //   return (
// //     <div className='bg-gray-900 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105'>
// //       <Link to={`/view-book-details/${data._id}`}>
// //         <div className='bg-gray-800 p-4'>
// //           <div className='bg-gray-700 rounded-md flex items-center justify-center overflow-hidden transform transition-transform duration-300 hover:scale-110'>
// //             <img src={data.url} alt="book cover" className='h-[30vh] w-full object-cover transform transition-transform duration-300' />
// //           </div>
// //           <h2 className='mt-4 text-2xl text-white font-bold truncate'>{data.title}</h2>
// //           <p className='mt-2 text-gray-400 text-lg'>by {data.author}</p>
// //           <p className='mt-2 text-yellow-400 text-xl font-semibold'>₹{data.price}</p>
// //         </div>
// //       </Link>
// //       {favourites && (
// //         <button
// //           className='bg-yellow-500 text-white text-lg px-4 py-2 rounded-b-lg border-t border-yellow-600 mt-4 transition-colors duration-300 hover:bg-yellow-600'
// //           onClick={handleRemoveBook}
// //         >
// //           Remove from Favourites
// //         </button>
// //       )}
// //     </div>
// //   );
// // };

// export default BookCard;
