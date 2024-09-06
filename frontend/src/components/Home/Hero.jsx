
import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css'; // Assuming you add the custom CSS in a separate file

const Hero = () => {
    return (
        <div className="h-[75vh] flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-white via-sky-300 to-sky-500">
            <div className="w-full mb-12 md:mb-0 lg:w-3/6 flex flex-col items-center lg:items-start justify-center px-6 lg:px-12">
                <h1 className="text-5xl lg:text-7xl font-bold text-zinc-900 text-center lg:text-left leading-tight">
                    Discover Your Next Great Read
                </h1>
                <p className="mt-6 text-lg lg:text-xl text-zinc-700 text-center lg:text-left">
                    Uncover captivating stories, enriching knowledge, and endless inspiration in our curated collection of books.
                </p>
                <div className="mt-8">
                    <Link to="/all-books" className="text-zinc-900 text-lg lg:text-xl font-semibold border border-zinc-900 px-8 py-3 hover:bg-zinc-900 hover:text-white rounded-full transition-all duration-300">
                        Discover Books
                    </Link>
                </div>
            </div>

            <div className="w-full lg:w-3/6 h-auto lg:h-full flex items-center justify-center">
                <div className="book-container">
                    <img src="./heroo.png" alt="hero" className="book-image" />
                </div>
            </div>
        </div>
    );
};

export default Hero;

