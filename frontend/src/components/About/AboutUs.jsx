// // src/components/About/AboutUs.jsx

// import React from 'react';

// const AboutUs = () => {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold text-center mb-6">About NovelNest</h1>
//       <p className="text-lg mb-4">
//         Welcome to NovelNest, your one-stop destination for discovering and managing your favorite books. 
//         At NovelNest, we aim to provide a comprehensive and user-friendly platform where book enthusiasts 
//         can explore a wide range of titles, from the latest bestsellers to timeless classics.
//       </p>
//       <p className="text-lg mb-4">
//         Our platform is designed with a clean and intuitive interface to enhance your browsing experience. 
//         Whether you're looking to purchase new books, keep track of your favorites, or simply read detailed 
//         descriptions, NovelNest has you covered. With features like personalized recommendations and a user-friendly 
//         cart system, we strive to make your reading journey enjoyable and convenient.
//       </p>
//       <div className="text-center mt-6">
//         <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
//         <p className="text-lg mb-4">
//           If you have any questions or need support, feel free to reach out to us through our email or follow us on social media.
//         </p>
//         <a href="mailto:support@NovelNest.com" className="text-blue-500 hover:underline">
//           support@novelnest.com
//         </a>
//         <div className="mt-4">
//           <a href="https://www.facebook.com" className="text-blue-500 hover:underline mr-4">
//             Facebook
//           </a>
//           <a href="https://twitter.com" className="text-blue-500 hover:underline">
//             Twitter
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

// import React from 'react';

// const AboutUs = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-purple-500 via-black-500 to-red-500 text-white">
//       <div className="container mx-auto px-4 py-12">
//         <h1 className="text-4xl font-extrabold text-center mb-8 drop-shadow-lg">
//           About NovelNest
//         </h1>
//         <p className="text-lg mb-6 leading-relaxed drop-shadow-lg">
//           Welcome to NovelNest, your one-stop destination for discovering and managing your favorite books. 
//           At NovelNest, we aim to provide a comprehensive and user-friendly platform where book enthusiasts 
//           can explore a wide range of titles, from the latest bestsellers to timeless classics.
//         </p>
//         <p className="text-lg mb-6 leading-relaxed drop-shadow-lg">
//           Our platform is designed with a clean and intuitive interface to enhance your browsing experience. 
//           Whether you're looking to purchase new books, keep track of your favorites, or simply read detailed 
//           descriptions, NovelNest has you covered. With features like personalized recommendations and a user-friendly 
//           cart system, we strive to make your reading journey enjoyable and convenient.
//         </p>
//         <div className="text-center mt-12">
//           <h2 className="text-3xl font-semibold mb-6 drop-shadow-lg">
//             Contact Us
//           </h2>
//           <p className="text-lg mb-6 leading-relaxed drop-shadow-lg">
//             If you have any questions or need support, feel free to reach out to us through our email or follow us on social media.
//           </p>
//           <a href="mailto:support@NovelNest.com" className="text-blue-200 hover:text-blue-400 underline font-medium">
//             support@novelnest.com
//           </a>
//           <div className="mt-6">
//             <a href="https://www.facebook.com/" className="text-blue-200 hover:text-blue-400 underline mr-6 font-medium">
//               Facebook
//             </a>
//             <a href="https://twitter.com/" className="text-blue-200 hover:text-blue-400 underline font-medium">
//               Twitter
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;
import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 via-gray-800 to-red-600 text-white">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8 drop-shadow-lg">
          About NovelNest
        </h1>
        <p className="text-lg md:text-xl mb-6 leading-relaxed text-center md:text-left drop-shadow-lg">
          Welcome to NovelNest, your ultimate destination for discovering and managing your favorite books. 
          At NovelNest, we strive to offer a comprehensive and user-friendly platform where book enthusiasts 
          can explore a wide range of titles, from the latest bestsellers to timeless classics.
        </p>
        <p className="text-lg md:text-xl mb-6 leading-relaxed text-center md:text-left drop-shadow-lg">
          Our platform features a clean and intuitive interface designed to enhance your browsing experience. 
          Whether you're looking to purchase new books, track your favorites, or read detailed descriptions, 
          NovelNest has you covered. With personalized recommendations and a user-friendly cart system, 
          we aim to make your reading journey enjoyable and convenient.
        </p>
        <div className="text-center mt-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 drop-shadow-lg">
            Contact Us
          </h2>
          <p className="text-lg md:text-xl mb-6 leading-relaxed drop-shadow-lg">
            If you have any questions or need support, feel free to reach out to us via email or follow us on social media.
          </p>
          <a href="mailto:support@novelnest.com" className="text-blue-300 hover:text-blue-500 underline font-medium">
            support@novelnest.com
          </a>
          <div className="mt-6">
            <a href="https://www.facebook.com/" className="text-blue-300 hover:text-blue-500 underline mr-6 font-medium">
              Facebook
            </a>
            <a href="https://twitter.com/" className="text-blue-300 hover:text-blue-500 underline font-medium">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
