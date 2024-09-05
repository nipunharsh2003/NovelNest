import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const MobileNav = () => {
  const role = useSelector((state) => state.auth.role);
  return (
   <>
   {role === "user" && (
    <div className='w-full flex  lg:hidden items-center justify-between mt-4'>
        <Link
            to="/profile"
            className="text-zinc-100 font-semibold w-full  text-center hover:bg-zinc-900 rounded transition-all"
          >
            Favourites
          </Link>
          <Link
            to="/profile/orderHistory"
            className="text-zinc-100 font-semibold w-full  text-center hover:bg-zinc-900 rounded transition-all"
          >
            Order History
          </Link>
          <Link
            to="/profile/setting"
            className="text-zinc-100 font-semibold w-full  text-center hover:bg-zinc-900 rounded transition-all"
          >
            Settings
          </Link>
    </div>)}
    {role === "admin" && (
    <div className='w-full flex  lg:hidden items-center justify-between mt-4'>
        <Link
            to="/profile"
            className="text-zinc-100 font-semibold w-full  text-center hover:bg-zinc-900 rounded transition-all"
          >
            all Orders
          </Link>
          <Link
            to="/profile/add-book"
            className="text-zinc-100 font-semibold w-full  text-center hover:bg-zinc-900 rounded transition-all"
          >
            addd book
         
          </Link>
    </div>)}
   </>
  )
}

export default MobileNav
