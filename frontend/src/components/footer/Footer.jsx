// import React from 'react';
// import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <div className='bg-zinc-800 text-white px-8 py-4'>
//       <div className='flex flex-col items-center'>
//         <h1 className='text-xl font-semibold mb-4'>&copy; 2024, made by nipun</h1>
//         <div className='flex gap-4 mb-4'>
//           <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='text-white hover:text-blue-500 transition-all duration-300'>
//             <FaFacebookF size={24} />
//           </a>
//           <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className='text-white hover:text-blue-400 transition-all duration-300'>
//             <FaTwitter size={24} />
//           </a>
//           <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='text-white hover:text-pink-500 transition-all duration-300'>
//             <FaInstagram size={24} />
//           </a>
//         </div>
//         <p className='text-sm'>NovelNest is a platform for book enthusiasts.</p>
//       </div>
//     </div>
//   );
// }

// export default Footer;
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white px-8 py-6'>
      <div className='flex flex-col items-center'>
        <h1 className='text-2xl font-bold mb-4'>&copy; 2024, Made by Nipun</h1>
        <div className='flex gap-6 mb-6'>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='text-white hover:text-blue-500 transition-transform transform hover:scale-110'>
            <FaFacebookF size={28} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className='text-white hover:text-blue-400 transition-transform transform hover:scale-110'>
            <FaTwitter size={28} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='text-white hover:text-pink-500 transition-transform transform hover:scale-110'>
            <FaInstagram size={28} />
          </a>
        </div>
        <p className='text-sm text-gray-400 mb-2'>NovelNest is a platform for book enthusiasts.</p>
        <p className='text-xs text-gray-500'>Discover, explore, and enjoy reading with us.</p>
      </div>
    </div>
  );
}

export default Footer;
