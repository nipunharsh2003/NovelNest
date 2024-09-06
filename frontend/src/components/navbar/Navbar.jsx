
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGripLines } from "react-icons/fa";
import { useSelector } from 'react-redux';
import axios from 'axios';

const Navbar = () => {
    const [MobileNav, setMobileNav] = useState("hidden");
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const links = [
        { title: "Home", link: "/" },
        { title: "About Us", link: "/about-us" },
        { title: "All Books", link: "/all-books" },
        { title: "Cart", link: "/cart" },
        { title: "Profile", link: "/profile" },
        { title: "Admin Profile", link: "/profile" },
    ];

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const role = useSelector((state) => state.auth.role);

    // Filter links based on user login status and role
    const adjustedLinks = links.filter(link => {
        if (!isLoggedIn) {
            return link.title === "Home" || link.title === "About Us";
        }
        if (isLoggedIn && role === "user") {
            return link.title !== "Admin Profile";
        }
        if (isLoggedIn && role === "admin") {
            return link.title !== "Cart" && link.title !== "Profile";
        }
        return true;
    });

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`https://novelnest-backend.onrender.com/api/search-books`, {
                params: { query: searchTerm }
            });
            navigate('/search-results', { state: { results: response.data.data } });
        } catch (error) {
            console.error("Error searching books:", error);
        }
    };

    return (
        <>
            <nav className="z-50 relative flex bg-zinc-800 text-white px-4 py-4 md:px-8 md:py-6 items-center justify-between">
                <Link to="/" className='flex items-center'>
                    <img
                        src='./logo.png'
                        alt='logo'
                        className='h-8 md:h-10 me-2 md:me-4'
                    />
                    <h1 className="text-xl md:text-2xl font-semibold">NovelNest</h1>
                </Link>
                <div className='flex flex-grow items-center gap-4'>
                    <form onSubmit={handleSearch} className="flex-grow md:w-auto">
                        <input
                            type="text"
                            placeholder="Search books..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full md:w-60 px-4 py-2 m-2 rounded bg-zinc-700 text-white border border-gray-600"
                        />
                    </form>
                    <div className='hidden md:flex items-center gap-4'>
                        {adjustedLinks.map((item, i) => (
                            <Link to={item.link}
                                className={item.title === "Profile" || item.title === "Admin Profile"
                                    ? "px-4 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300"
                                    : "hover:text-blue-500 transition-all duration-300"}
                                key={i}
                            >
                                {item.title}
                            </Link>
                        ))}
                        {!isLoggedIn && (
                            <div className="flex gap-4">
                                <Link to="/Login" className="px-4 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300">
                                    Login
                                </Link>
                                <Link to="/signUp" className="px-4 py-1 border bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300">
                                    SignUp
                                </Link>
                            </div>
                        )}
                    </div>
                    <button className='block md:hidden text-white text-2xl hover:text-zinc-400' onClick={() => setMobileNav(MobileNav === "hidden" ? "flex" : "hidden")}>
                        <FaGripLines />
                    </button>
                </div>
            </nav>
            <div className={`${MobileNav} bg-zinc-800 h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center`}>
                {adjustedLinks.map((item, i) => (
                    <Link to={item.link}
                        className="text-white text-3xl mb-8 font-semibold hover:text-blue-500 transition-all duration-300"
                        key={i}
                        onClick={() => setMobileNav("hidden")}
                    >
                        {item.title}
                    </Link>
                ))}
                {!isLoggedIn && (
                    <>
                        <Link to="/Login" className="px-8 mb-8 text-2xl font-semibold py-2 border border-blue-500 rounded text-white hover:bg-white hover:text-zinc-800 transition-all duration-300">
                            Login
                        </Link>
                        <Link to="/SignUp" className="px-8 mb-8 text-2xl font-semibold py-2 bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300">
                            SignUp
                        </Link>
                    </>
                )}
            </div>
        </>
    );
}

export default Navbar;
// // // // import React, { useState } from 'react';
// // // // import { Link, useNavigate } from 'react-router-dom';
// // // // import { FaGripLines } from "react-icons/fa";
// // // // import { useSelector } from 'react-redux';
// // // // import axios from 'axios';

// // // // const Navbar = () => {
// // // //     const [MobileNav, setMobileNav] = useState("hidden");
// // // //     const [searchTerm, setSearchTerm] = useState("");
// // // //     const navigate = useNavigate();

// // // //     const links = [
// // // //         { title: "Home", link: "/" },
// // // //         { title: "About Us", link: "/about-us" },
// // // //         { title: "All Books", link: "/all-books" },
// // // //         { title: "Cart", link: "/cart" },
// // // //         { title: "Profile", link: "/profile" },
// // // //         { title: "Admin Profile", link: "/admin-profile" },
// // // //     ];

// // // //     const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
// // // //     const role = useSelector((state) => state.auth.role);

// // // //     // Filter links based on user login status and role
// // // //     const adjustedLinks = links.filter(link => {
// // // //         if (!isLoggedIn) {
// // // //             return link.title === "Home" || link.title === "About Us";
// // // //         }
// // // //         if (isLoggedIn && role === "user") {
// // // //             return link.title !== "Admin Profile";
// // // //         }
// // // //         if (isLoggedIn && role === "admin") {
// // // //             return link.title !== "Cart" && link.title !== "Profile";
// // // //         }
// // // //         return true;
// // // //     });

// // // //     const handleSearch = async (e) => {
// // // //         e.preventDefault();
// // // //         try {
// // // //             const response = await axios.get(`http://localhost:8100/api/search-books`, {
// // // //                 params: { query: searchTerm }
// // // //             });
// // // //             navigate('/search-results', { state: { results: response.data.data } });
// // // //         } catch (error) {
// // // //             console.error("Error searching books:", error);
// // // //         }
// // // //     };

// // // //     return (
// // // //         <>
// // // //             <nav className="relative flex items-center justify-between bg-gradient-to-r from-gray-800 to-gray-900 text-white px-4 py-4 md:px-8 md:py-6 shadow-lg z-50">
// // // //                 <Link to="/" className='flex items-center'>
// // // //                     <img
// // // //                         src='./logo.png'
// // // //                         alt='logo'
// // // //                         className='h-8 md:h-10 mr-2 md:mr-4'
// // // //                     />
// // // //                     <h1 className="text-xl md:text-2xl font-bold">NovelNest</h1>
// // // //                 </Link>
// // // //                 <div className='flex flex-grow items-center gap-4'>
// // // //                     <form onSubmit={handleSearch} className="flex-grow md:w-auto">
// // // //                         <input
// // // //                             type="text"
// // // //                             placeholder="Search books..."
// // // //                             value={searchTerm}
// // // //                             onChange={(e) => setSearchTerm(e.target.value)}
// // // //                             className="w-full md:w-60 px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
// // // //                         />
// // // //                     </form>
// // // //                     <div className='hidden md:flex items-center gap-4'>
// // // //                         {adjustedLinks.map((item, i) => (
// // // //                             <Link to={item.link}
// // // //                                 className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 
// // // //                                     ${item.title === "Profile" || item.title === "Admin Profile"
// // // //                                     ? "border border-blue-500 text-white bg-blue-600 hover:bg-blue-500"
// // // //                                     : "hover:text-blue-400"}`}
// // // //                                 key={i}
// // // //                             >
// // // //                                 {item.title}
// // // //                             </Link>
// // // //                         ))}
// // // //                         {!isLoggedIn && (
// // // //                             <div className="flex gap-4">
// // // //                                 <Link to="/Login" className="px-4 py-2 border border-blue-500 rounded-md text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300">
// // // //                                     Login
// // // //                                 </Link>
// // // //                                 <Link to="/signUp" className="px-4 py-2 bg-blue-600 rounded-md text-white hover:bg-blue-700 transition-all duration-300">
// // // //                                     SignUp
// // // //                                 </Link>
// // // //                             </div>
// // // //                         )}
// // // //                     </div>
// // // //                     <button className='block md:hidden text-white text-2xl hover:text-blue-300 transition-all duration-300' onClick={() => setMobileNav(MobileNav === "hidden" ? "flex" : "hidden")}>
// // // //                         <FaGripLines />
// // // //                     </button>
// // // //                 </div>
// // // //             </nav>
// // // //             <div className={`${MobileNav} bg-gray-800 h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center`}>
// // // //                 {adjustedLinks.map((item, i) => (
// // // //                     <Link to={item.link}
// // // //                         className="text-white text-3xl mb-6 font-semibold hover:text-blue-400 transition-all duration-300"
// // // //                         key={i}
// // // //                         onClick={() => setMobileNav("hidden")}
// // // //                     >
// // // //                         {item.title}
// // // //                     </Link>
// // // //                 ))}
// // // //                 {!isLoggedIn && (
// // // //                     <>
// // // //                         <Link to="/Login" className="px-8 mb-4 text-2xl font-semibold py-2 border border-blue-500 rounded text-white hover:bg-blue-500 hover:text-white transition-all duration-300">
// // // //                             Login
// // // //                         </Link>
// // // //                         <Link to="/SignUp" className="px-8 mb-4 text-2xl font-semibold py-2 bg-blue-600 rounded hover:bg-blue-700 hover:text-white transition-all duration-300">
// // // //                             SignUp
// // // //                         </Link>
// // // //                     </>
// // // //                 )}
// // // //             </div>
// // // //         </>
// // // //     );
// // // // };

// // // // export default Navbar;
// // import React, { useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { FaGripLines } from "react-icons/fa";
// // import { useSelector } from 'react-redux';
// // import axios from 'axios';

// // const Navbar = () => {
// //     const [MobileNav, setMobileNav] = useState("hidden");
// //     const [searchTerm, setSearchTerm] = useState("");
// //     const navigate = useNavigate();

// //     const links = [
// //         { title: "Home", link: "/" },
// //         { title: "About Us", link: "/about-us" },
// //         { title: "All Books", link: "/all-books" },
// //         { title: "Cart", link: "/cart" },
// //         { title: "Profile", link: "/profile" },
// //         { title: "Admin Profile", link: "/admin-profile" },
// //     ];

// //     const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
// //     const role = useSelector((state) => state.auth.role);

// //     // Filter links based on user login status and role
// //     const adjustedLinks = links.filter(link => {
// //         if (!isLoggedIn) {
// //             return link.title === "Home" || link.title === "About Us";
// //         }
// //         if (isLoggedIn && role === "user") {
// //             return link.title !== "Admin Profile";
// //         }
// //         if (isLoggedIn && role === "admin") {
// //             return link.title !== "Cart" && link.title !== "Profile";
// //         }
// //         return true;
// //     });

// //     const handleSearch = async (e) => {
// //         e.preventDefault();
// //         try {
// //             const response = await axios.get("http://localhost:8100/api/search-books", {
// //                 params: { query: searchTerm }
// //             });
// //             navigate('/search-results', { state: { results: response.data.data } });
// //         } catch (error) {
// //             console.error("Error searching books:", error);
// //         }
// //     };

// //     return (
// //         <>
// //             <nav className="z-50 relative flex bg-zinc-800 text-white px-4 py-4 md:px-8 md:py-6 items-center justify-between">
// //                 <Link to="/" className='flex items-center'>
// //                     <img
// //                         src='./logo.png'
// //                         alt='logo'
// //                         className='h-8 md:h-10 me-2 md:me-4'
// //                     />
// //                     <h1 className="text-xl md:text-2xl font-semibold">NovelNest</h1>
// //                 </Link>
// //                 <div className='flex flex-grow items-center gap-4'>
// //                     <form onSubmit={handleSearch} className="flex-grow md:w-auto">
// //                         <input
// //                             type="text"
// //                             placeholder="Search books..."
// //                             value={searchTerm}
// //                             onChange={(e) => setSearchTerm(e.target.value)}
// //                             className="w-full md:w-60 px-4 py-2 m-2 rounded bg-zinc-700 text-white border border-gray-600"
// //                         />
// //                     </form>
// //                     <div className='hidden md:flex items-center gap-4'>
// //                         {adjustedLinks.map((item, i) => (
// //                             <Link to={item.link}
// //                                 className={item.title === "Profile" || item.title === "Admin Profile"
// //                                     ? "px-4 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300"
// //                                     : "hover:text-blue-500 transition-all duration-300"}
// //                                 key={i}
// //                             >
// //                                 {item.title}
// //                             </Link>
// //                         ))}
// //                         {!isLoggedIn && (
// //                             <div className="flex gap-4">
// //                                 <Link to="/Login" className="px-4 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300">
// //                                     Login
// //                                 </Link>
// //                                 <Link to="/signUp" className="px-4 py-1 border bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300">
// //                                     SignUp
// //                                 </Link>
// //                             </div>
// //                         )}
// //                     </div>
// //                     <button className='block md:hidden text-white text-2xl hover:text-zinc-400' onClick={() => setMobileNav(MobileNav === "hidden" ? "flex" : "hidden")}>
// //                         <FaGripLines />
// //                     </button>
// //                 </div>
// //             </nav>
// //             <div className={`${MobileNav} bg-zinc-800 h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center`}>
// //                 {adjustedLinks.map((item, i) => (
// //                     <Link to={item.link}
// //                         className="text-white text-3xl mb-8 font-semibold hover:text-blue-500 transition-all duration-300"
// //                         key={i}
// //                         onClick={() => setMobileNav("hidden")}
// //                     >
// //                         {item.title}
// //                     </Link>
// //                 ))}
// //                 {!isLoggedIn && (
// //                     <>
// //                         <Link to="/Login" className="px-8 mb-8 text-2xl font-semibold py-2 border border-blue-500 rounded text-white hover:bg-white hover:text-zinc-800 transition-all duration-300">
// //                             Login
// //                         </Link>
// //                         <Link to="/SignUp" className="px-8 mb-8 text-2xl font-semibold py-2 bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300">
// //                             SignUp
// //                         </Link>
// //                     </>
// //                 )}
// //             </div>
// //         </>
// //     );
// // }

// // export default Navbar;
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaGripLines } from "react-icons/fa";
// import { useSelector } from 'react-redux';
// import axios from 'axios';

// const Navbar = () => {
//     const [MobileNav, setMobileNav] = useState("hidden");
//     const [searchTerm, setSearchTerm] = useState("");
//     const navigate = useNavigate();

//     const links = [
//         { title: "Home", link: "/" },
//         { title: "About Us", link: "/about-us" },
//         { title: "All Books", link: "/all-books" },
//         { title: "Cart", link: "/cart" },
//         { title: "Profile", link: "/profile" },
//         { title: "Admin Profile", link: "/admin-profile" },
//     ];

//     const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
//     const role = useSelector((state) => state.auth.role);

//     // Filter links based on user login status and role
//     const adjustedLinks = links.filter(link => {
//         if (!isLoggedIn) {
//             return link.title === "Home" || link.title === "About Us";
//         }
//         if (isLoggedIn && role === "user") {
//             return link.title !== "Admin Profile";
//         }
//         if (isLoggedIn && role === "admin") {
//             return link.title !== "Cart" && link.title !== "Profile";
//         }
//         return true;
//     });

//     const handleSearch = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.get(http://localhost:8100/api/search-books, {
//                 params: { query: searchTerm }
//             });
//             navigate('/search-results', { state: { results: response.data.data } });
//         } catch (error) {
//             console.error("Error searching books:", error);
//         }
//     };

//     return (
//         <>
//             <nav className="z-50 relative flex bg-zinc-800 text-white px-4 py-4 md:px-8 md:py-6 items-center justify-between">
//                 <Link to="/" className='flex items-center'>
//                     <img
//                         src='./logo.png'
//                         alt='logo'
//                         className='h-8 md:h-10 me-2 md:me-4'
//                     />
//                     <h1 className="text-xl md:text-2xl font-semibold">NovelNest</h1>
//                 </Link>
//                 <div className='flex flex-grow items-center gap-4'>
//                     <form onSubmit={handleSearch} className="flex-grow md:w-auto">
//                         <input
//                             type="text"
//                             placeholder="Search books..."
//                             value={searchTerm}
//                             onChange={(e) => setSearchTerm(e.target.value)}
//                             className="w-full md:w-60 px-4 py-2 m-2 rounded bg-zinc-700 text-white border border-gray-600"
//                         />
//                     </form>
//                     <div className='hidden md:flex items-center gap-4'>
//                         {adjustedLinks.map((item, i) => (
//                             <Link to={item.link}
//                                 className={item.title === "Profile" || item.title === "Admin Profile"
//                                     ? "px-4 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300"
//                                     : "hover:text-blue-500 transition-all duration-300"}
//                                 key={i}
//                             >
//                                 {item.title}
//                             </Link>
//                         ))}
//                         {!isLoggedIn && (
//                             <div className="flex gap-4">
//                                 <Link to="/Login" className="px-4 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300">
//                                     Login
//                                 </Link>
//                                 <Link to="/signUp" className="px-4 py-1 border bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300">
//                                     SignUp
//                                 </Link>
//                             </div>
//                         )}
//                     </div>
//                     <button className='block md:hidden text-white text-2xl hover:text-zinc-400' onClick={() => setMobileNav(MobileNav === "hidden" ? "flex" : "hidden")}>
//                         <FaGripLines />
//                     </button>
//                 </div>
//             </nav>
//             <div className={${MobileNav} bg-zinc-800 h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center}>
//                 {adjustedLinks.map((item, i) => (
//                     <Link to={item.link}
//                         className="text-white text-3xl mb-8 font-semibold hover:text-blue-500 transition-all duration-300"
//                         key={i}
//                         onClick={() => setMobileNav("hidden")}
//                     >
//                         {item.title}
//                     </Link>
//                 ))}
//                 {!isLoggedIn && (
//                     <>
//                         <Link to="/Login" className="px-8 mb-8 text-2xl font-semibold py-2 border border-blue-500 rounded text-white hover:bg-white hover:text-zinc-800 transition-all duration-300">
//                             Login
//                         </Link>
//                         <Link to="/SignUp" className="px-8 mb-8 text-2xl font-semibold py-2 bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300">
//                             SignUp
//                         </Link>
//                     </>
//                 )}
//             </div>
//         </>
//     );
// }

// export default Navbar;