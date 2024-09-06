
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
      "https://novelnest-backend.onrender.com/api/delete-book-from-favourites",{},
     
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
