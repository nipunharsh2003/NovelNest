import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Profile/Sidebar';
import axios from 'axios';
import Loader from '../components/Loader/Loader';
import MobileNav from '../components/Profile/MobileNav';

const  Profile = ()=> {
  const [Profile, setProfile ] = useState();

   const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
   };
 
  useEffect(()=>{
    const fetch = async () =>{
      const response = await axios.get("http://localhost:8100/api/get-user-information", {headers})
      setProfile(response.data);
    };
    
    fetch();
  } ,[])
  return (
    <div className='bg-zinc-900 px-2 md:px-12 flex flex-col md:flex-row  py-8 gap-4 text-white'>
{!Profile && <div className='w-full h-[100%] flex items-center justify-center'><Loader /></div>}
{Profile && ( <>
      <div className=' w-full md:w-1/6 h-auto lg:h-screen'><Sidebar data={Profile} />
      <MobileNav  /></div>
      <div className=' w-full md:w-5/6'><Outlet /></div></>)}
     
    </div>
  );
};
export default Profile;

// import React, { useEffect, useState } from 'react';
// import { Outlet } from 'react-router-dom';
// import Sidebar from '../components/Profile/Sidebar';
// import axios from 'axios';
// import Loader from '../components/Loader/Loader';
// import MobileNav from '../components/Profile/MobileNav';

// const Profile = () => {
//   const [profile, setProfile] = useState(null); // Renamed to lower camel case for consistency

//   const headers = {
//     id: localStorage.getItem("id"),
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//   };

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const response = await axios.get("http://localhost:8100/api/get-user-information", { headers });
//         setProfile(response.data);
//       } catch (error) {
//         console.error("Error fetching profile data:", error);
//       }
//     };

//     fetchProfile();
//   }, []);

//   return (
//     <div className='bg-gray-900 text-white min-h-screen flex flex-col md:flex-row'>
//       {!profile ? (
//         <div className='flex-grow flex items-center justify-center'>
//           <Loader />
//         </div>
//       ) : (
//         <>
//           <div className='w-full md:w-1/4 lg:w-1/5 h-auto bg-gray-800 p-4 md:p-6'>
//             <Sidebar data={profile} />
//             <MobileNav />
//           </div>
//           <div className='w-full md:w-3/4 lg:w-4/5 bg-gray-800 p-4 md:p-6 flex-grow'>
//             <Outlet />
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Profile;
