





import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import   { Link, useNavigate, useParams } from 'react-router-dom';
import { IoHeartSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { Navigate } from "react-router-dom";


const ViewBookDeatils = () => {
 const  Navigate = useNavigate();
    const { id } = useParams();
    const [Data, setData] = useState(null); // Initialize state with null
    const isLoggedIn= useSelector((state)=> state.auth.isLoggedIn);
    const role= useSelector((state)=> state.auth.role);
    console.log(isLoggedIn);
    console.log(role)

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get(`https://novelnest-backend.onrender.com/api/get-book-by-id/${id}`);
                console.log(response);
                setData(response.data.data);
            } catch (error) {
                console.error("Error fetching book details:", error);
            }
        };

        fetch();
    }, [id]); 
    const headers = {
        id: localStorage.getItem("id"),
        authorization: `Bearer ${localStorage.getItem("token")}`,
        bookid: id,
    };
    
    const handleFavourite = async () => {
        try {
            const response = await axios.put("https://novelnest-backend.onrender.com/api/add-book-to-favourites", {}, { headers });
            alert(response.data.message);
            console.log(response.data.message); // Corrected typo here
        } catch (error) {
            console.error("Error adding book to favourites:", error);
        }
    };
    const handleCart = async () =>{
        const response =  await axios.put("https://novelnest-backend.onrender.com/api/add-to-cart",{}, { headers});
        alert(response.data.message);
    };
    const deleteBook = async () => {
        try {
          const response = await axios.delete("https://novelnest-backend.onrender.com/api/delete-book", {
            headers: headers,
          });
          alert(response.data.message);
          Navigate("/all-books");
        } catch (error) {
          console.error("Error deleting the book:", error.response ? error.response.data : error.message);
          alert("Failed to delete the book.");
        }
      };

  
    return (
        <> 
            {Data ? (
                <div className='px-4 md:px-8 lg:px-12 py-8 bg-zinc-900 flex flex-col lg:flex-row gap-8 items-start'>
                    <div className='w-full lg:w-1/2'>
                        <div className="flex flex-col lg:flex-row justify-around bg-zinc-800 p-4 md:p-8 lg:p-12 rounded">
                            <img src={Data.url} className="h-60 md:h-80 lg:h-[70vh] rounded" alt="Book cover" />
                            {isLoggedIn === true && role === "user" && (
                                <div className="flex flex-row lg:flex-col items-center justify-between lg:justify-start mt-4 lg:mt-0">
                                    <button className="bg-white rounded lg:rounded-full text-4xl text-red-500 flex items-center justify-center lg:text-3xl p-3" onClick={handleFavourite}>
                                        <IoHeartSharp />
                                        <span className="ms-4 block lg:hidden">Favorites</span>
                                    </button>
                                    <button className="bg-white rounded lg:rounded-full text-4xl mt-0 lg:mt-8 text-blue-500 flex items-center justify-center lg:text-3xl p-3" onClick={handleCart}>
                                        <FaShoppingCart />
                                        <span className="ms-4 block lg:hidden">Add to cart</span>
                                    </button>
                                </div>
                            )}
                            {isLoggedIn === true && role === "admin" && (
                                <div className="flex flex-row lg:flex-col items-center justify-between lg:justify-start mt-4 lg:mt-0">
                                    <Link to={`/updateBook/${id}`} className="bg-white rounded lg:rounded-full text-4xl text-red-500 flex items-center justify-center lg:text-3xl p-3">
                                        <FaEdit />
                                        <span className="ms-4 block lg:hidden">Edit</span>
                                    </Link>
                                    <button className="text-red-500 rounded lg:rounded-full text-4xl mt-0 lg:mt-8 bg-slate-100 flex items-center justify-center lg:text-3xl p-3"
                                    onClick={deleteBook}>
                                        <MdOutlineDelete />
                                        <span className="ms-4 block lg:hidden">Delete book</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='p-4 w-full lg:w-1/2'>
                        <h1 className="text-2xl md:text-3xl lg:text-4xl text-zinc-300 font-semibold">{Data.title}</h1>
                        <p className="text-zinc-400 mt-1">by {Data.author}</p>
                        <p className="text-zinc-400 mt-1">{Data.description}</p>
                        <p className="flex mt-4 items-center justify-start text-zinc-400">{Data.language}</p>
                        <p className="mt-4 text-zinc-100 text-xl md:text-2xl lg:text-3xl font-semibold">price: ₹{Data.price}</p>
                    </div>
                </div>
            ) : (
                <div className="h-screen bg-zinc-900 flex items-center justify-center">
                    <Loader />
                </div>
            )}
        </>
    );
};

export default ViewBookDeatils;









