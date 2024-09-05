// import React, { useEffect } from "react";
// import Home from "./pages/Home";

// import Navbar from "./components/navbar/Navbar";
// import Footer from "./components/footer/Footer";
// import AllBooks from "./pages/AllBooks";
// import AllOrders from "./pages/AllOrders"

// import SignUp from "./pages/SignUp";
// import Login from "./pages/Login";
// import Cart from "./pages/Cart";
// import AboutUs from "./components/About/AboutUs";
// import Favourites from "./components/Profile/Favourites"
// import UserOrderHistory from "./components/Profile/UserOrderHistory";
// import Setting from "./components/Profile/Setting";




// import Profile from "./pages/Profile";
// import {Routes, Route } from "react-router-dom";
// import ViewBookDeatils from "./components/ViewBookDetails/ViewBookDeatils";
// import { useDispatch, useSelector } from "react-redux";
// import { authActions } from "./store/auth";
// import AddBooks from "./pages/AddBooks";
// import UpdateBook from "./pages/UpdateBook";

// const App = () => {
//   const dispatch = useDispatch();
//   const role= useSelector((state)=> state.auth.role);
  
//   useEffect(() => {
//     if (
//       localStorage.getItem("id") &&
//       localStorage.getItem("token") &&
//       localStorage.getItem("role")
//     ) {
//       dispatch(authActions.login());
//       dispatch(authActions.changeRole(localStorage.getItem("role")));
//     }
//   }, []);
  
  
//   return (
//     <div>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/all-books" element={<AllBooks />} />
//           <Route path="/Login" element={<Login />} />
//           <Route path="/SignUp" element={<SignUp />} />
//           <Route path="/cart" element={<Cart />} />
//         <Route  path="/Profile" element={<Profile />}>
//        { role === "user" ?  <Route  index element={<Favourites />} /> :  <Route  index element={<AllOrders />} />}
//        { role === "admin" &&  <Route  path="/Profile/add-book" element={<AddBooks />} />}
//         <Route  path="/Profile/orderHistory" element={<UserOrderHistory />} />
//         <Route  path="/Profile/Setting" element={<Setting />} />
        
//         </Route>
//           <Route path="/about-us" element={<AboutUs />} />
//           <Route path="/updateBook/:id" element={<UpdateBook />} />
//           <Route path="view-book-details/:id"element={<ViewBookDeatils />} />
//         </Routes>
//         <Footer />
//     </div>
//   );
// };

// export default App;
// import React, { useEffect } from "react";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import AllBooks from "./pages/AllBooks";
import AllOrders from "./pages/AllOrders";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import AboutUs from "./components/About/AboutUs";
import Favourites from "./components/Profile/Favourites";
import UserOrderHistory from "./components/Profile/UserOrderHistory";
import Setting from "./components/Profile/Setting";
import PaymentSuccess from "./components/PaymentSuccess"; 
import PaymentFailure from "./components/PaymentFailure"; 
import Profile from "./pages/Profile";
import { Routes, Route } from "react-router-dom";
import ViewBookDetails from "./components/ViewBookDetails/ViewBookDeatils";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store/auth";
import AddBooks from "./pages/AddBooks";
import UpdateBook from "./pages/UpdateBook";
import { useEffect } from "react";
import OTPVerification from "./components/OTPVerification";
import SearchResults from "./components/SearchResults";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

const App = () => {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.auth.role);

  useEffect(() => {
    if (
      localStorage.getItem("id") &&
      localStorage.getItem("token") &&
      localStorage.getItem("role")
    ) {
      dispatch(authActions.login());
      dispatch(authActions.changeRole(localStorage.getItem("role")));
    }
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-books" element={<AllBooks />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />}>
          {role === "user" ? (
            <Route index element={<Favourites />} />
          ) : (
            <Route index element={<AllOrders />} />
          )}
          {role === "admin" && <Route path="add-book" element={<AddBooks />} />}
          <Route path="orderHistory" element={<UserOrderHistory />} />
          <Route path="setting" element={<Setting />} />
         
        </Route>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/updateBook/:id" element={<UpdateBook />} />
        <Route path="/view-book-details/:id" element={<ViewBookDetails />} />
        
        {/* Payment Routes */}
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-failure" element={<PaymentFailure />} />
        <Route path="/otp-verification" element={<OTPVerification />} />
         <Route path="/search-results" element={<SearchResults />} />

<Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} /> 
        
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
