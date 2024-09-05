import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import   { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const UpdateBook = () => {
    const [Data, setData] = useState({
      url: "",
      title: "",
      author: "",
      price: "",
      description: "",
      language: "",
    });
  

  const { id}= useParams();
  const navigate = useNavigate();
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
    bookid: id,
  };
    const change = (e) => {
      const { name, value } = e.target;
      setData({ ...Data, [name]: value });
    };
  
    const submit = async (e) => {
      e.preventDefault();
      try {
        if (
          Data.url === "" ||
          Data.title === "" ||
          Data.author === "" ||
          Data.price === "" ||
          Data.description === "" ||
          Data.language === ""
        ) {
          alert("Please fill all the fields");
         
        }  else{
          const response = await axios.put('http://localhost:8100/api/update-book', Data, { headers} );
        };
        setData({
          url: "",
          title: "",
          author: "",
          price: "",
          description: "",
          language: "",
  
        })
        alert(response.data.message);
  
      
  
        // Your API call logic here (e.g., axios.post)
  
      } catch (error) {
        alert(error.response?.data?.message || "book added successfully");
        navigate(`/view-book-details/${id}`)
      }
    };
    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get(`http://localhost:8100/api/get-book-by-id/${id}`);
                console.log(response);
                setData(response.data.data);
            } catch (error) {
                console.error("Error fetching book details:", error);
            }
        };

        fetch();
    }, [id]);
    return (
        <div className='h-[100%] p-0 md:p-4 bg-zinc-900'>
          <h1 className='text-3xl md:text-5xl font-semibold text-zinc-500 mb-8'>
            Update Book
          </h1>
          <div className='p-4 bg-zinc-800 rounded'>
            <div>
              <label htmlFor='url' className='text-zinc-400'>Image</label>
              <input
                type="text"
                className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none'
                placeholder='URL of image'
                name="url"
                required
                value={Data.url}
                onChange={change}
              />
            </div>
            <div className='mt-4'>
              <label htmlFor='title' className='text-zinc-400'>Title of Book</label>
              <input
                type="text"
                className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none'
                placeholder='Title of book'
                name="title"
                required
                value={Data.title}
                onChange={change}
              />
            </div>
            <div className='mt-4'>
              <label htmlFor='author' className='text-zinc-400'>Author of Book</label>
              <input
                type="text"
                className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none'
                placeholder='Author of book'
                name="author"
                required
                value={Data.author}
                onChange={change}
              />
            </div>
            <div className='mt-4 flex gap-4'>
              <div className='w-3/6'>
                <label htmlFor='language' className='text-zinc-400'>Language</label>
                <input
                  type="text"
                  className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none'
                  placeholder='Language of book'
                  name="language"
                  required
                  value={Data.language}
                  onChange={change}
                />
              </div>
              <div className='w-3/6'>
                <label htmlFor='price' className='text-zinc-400'>Price</label>
                <input
                  type="number"
                  className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none'
                  placeholder='Price of book'
                  name="price"
                  required
                  value={Data.price}
                  onChange={change}
                />
              </div>
            </div>
            <div className='w-3/6'>
              <label htmlFor='description' className='text-zinc-400'>Description</label>
              <textarea
                className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none'
                rows="5"
                placeholder='Description of book'
                name="description"
                required
                value={Data.description}
                onChange={change}
              />
            </div>
            <button
              onClick={submit}
              className='mt-4 px-3 bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition-all duration-300'
            >
            update book
            </button>
          </div>
        </div>
      );
}
export default UpdateBook;