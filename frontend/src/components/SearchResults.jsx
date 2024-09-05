// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import BookCard from '../components/BookCard/BookCard';

// const SearchResults = () => {
//     const location = useLocation();
//     const { results } = location.state || { results: [] };

//     return (
//         <div className='bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 min-h-screen px-4 sm:px-8 md:px-12 py-8'>
//             <h4 className="text-4xl font-bold text-white text-center mb-6">
//                 Search Results
//             </h4>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {results.map((item, i) => (
//                     <div key={i} className="flex">
//                         <BookCard data={item} />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default SearchResults;
import React from 'react';
import { useLocation } from 'react-router-dom';
import BookCard from '../components/BookCard/BookCard';

const SearchResults = () => {
    const location = useLocation();
    const { results } = location.state || { results: [] };

    return (
        <div className='bg-zinc-900 h-auto px-4 sm:px-8 md:px-12 py-8'>
            <h4 className="text-4xl font-bold text-white text-center mb-6">
                Search Results
            </h4>
            {results.length === 0 ? (
                <p className="text-xl text-white text-center">
                    No books found matching your search criteria.
                </p>
            ) : (
                <div className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                    {results.map((item, i) => (
                        <div key={i} className="flex">
                            <BookCard data={item} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchResults;

