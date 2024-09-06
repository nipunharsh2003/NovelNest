
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { authActions} from "../../store/auth";


const Sidebar = ({ data }) => {
   const dispatch = useDispatch()
    const history = useNavigate();
    const role = useSelector((state) => state.auth.role);
  return (
    <div className="bg-zinc-800 p-4 flex flex-col items-center justify-between rounded h-auto lg:h-[100%]">
     <div className='flex items-center flex-col justify-center'>
      {""}
       <img src={data.avtor} className="h-[12vh]" />
      <p className="mt-3 text-xl text-zinc-100 font-semibold">{data.username}</p>
      <p className="mt-1 text-normal text-zinc-300">{data.email}</p>

      <div className="w-full mt-4  h-[1px] bg-slate-500 lg:block hidden"></div></div>
       { role === "user" && (
        <div className="w-full flex-col items-center justify-center hidden lg:flex">
        <Link
          to="/profile"
          className="text-zinc-100 font-semibold w-full py-2 text-center hover:bg-zinc-900 rounded transition-all"
        >
          Favourites
        </Link>
        <Link
          to="/profile/orderHistory"
          className="text-zinc-100 font-semibold w-full py-2 mt-4 text-center hover:bg-zinc-900 rounded transition-all"
        >
          Order History
        </Link>
        <Link
          to="/profile/setting"
          className="text-zinc-100 font-semibold w-full py-2 mt-4 text-center hover:bg-zinc-900 rounded transition-all"
        >
          Settings
        </Link>
     
    </div>)}
    {role === "admin" && 
    (
      <div className="w-full flex-col items-center justify-center hidden lg:flex">
      <Link
        to="/profile"
        className="text-zinc-100 font-semibold w-full py-2 text-center hover:bg-zinc-900 rounded transition-all"
      >
        all Orders
      </Link>
      <Link
        to="/profile/add-book"
        className="text-zinc-100 font-semibold w-full py-2 mt-4 text-center hover:bg-zinc-900 rounded transition-all"
      >
      add book
     
      </Link>
   
  </div>)}
      <button className=' bg-zinc-900 w-9/6  lg:w-full mt-4 lg:mt-0 text-white font-semibold flex items-center justify-center py-2 rounded hover:bg-zinc-600 transition-all duration-300 ' 
      onClick={()=>{
        dispatch(authActions.logout());
        dispatch(authActions.changeRole("user"));
        localStorage.clear("id");
        localStorage.clear("token");
        localStorage.clear("role");
        history("/");
      }}  >
      Log Out <FaArrowRightFromBracket  className='ms-4'  /></button>
    </div>
  );
};

export default Sidebar;