
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BookCard from '../BookCard/BookCard';

const Favourites = () => {
  const [FavouriteBooks, setFavouriteBooks] = useState();
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get('https://novelnest-backend.onrender.com/api/get-favourites-books', { headers });
      setFavouriteBooks(response.data.data);
    };
    fetch();
  }, [FavouriteBooks]);

  return (
    <>
      {FavouriteBooks && FavouriteBooks.length === 0 && (
        <div className='text-3xl sm:text-4xl md:text-5xl h-[100%] font-semibold text-zinc-500 flex items-center justify-center w-full bg-pink-100 flex-col'>
          No Favourite Books
          <img src="./bookmark_1883896.png" alt="" className='h-[15vh] sm:h-[20vh] my-8' />
        </div>
      )}

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {FavouriteBooks && FavouriteBooks.map((items, i) => (
          <div key={i}>
            <BookCard data={items} favourites={true} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Favourites;
