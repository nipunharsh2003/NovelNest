
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
      const response = await axios.get('http://localhost:8100/api/get-favourites-books', { headers });
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
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import BookCard from '../BookCard/BookCard';

// const Favourites = () => {
//   const [favouriteBooks, setFavouriteBooks] = useState([]);
//   const headers = {
//     id: localStorage.getItem("id"),
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//   };

//   useEffect(() => {
//     const fetchFavourites = async () => {
//       try {
//         const response = await axios.get('http://localhost:8100/api/get-favourites-books', { headers });
//         setFavouriteBooks(response.data.data);
//       } catch (error) {
//         console.error("Error fetching favourite books:", error);
//       }
//     };
//     fetchFavourites();
//   }, []);

//   return (
//     <div className='bg-gray-900 min-h-screen p-4 md:p-8'>
//       {favouriteBooks.length === 0 ? (
//         <div className='flex flex-col items-center justify-center h-full text-center'>
//           <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-500 mb-4'>
//             No Favourite Books
//           </h1>
//           <img src="./bookmark_1883896.png" alt="No favourites" className='h-[20vh] sm:h-[25vh]' />
//         </div>
//       ) : (
//         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
//           {favouriteBooks.map((item, index) => (
//             <div key={index} className='bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>
//               <BookCard data={item} favourites={true} />
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Favourites;
