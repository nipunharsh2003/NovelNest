
const express = require("express");
const app = express();
 const router = express.Router();
 const mongoose = require("mongoose");
 const session = require("express-session");
 const stripe = require("stripe")('sk_test_51Pj1w2BqjnFp5nQH8VDa0VYlUAMMZ727apZziXulvHk1FjSzmGN3T1NosCay4Td2fe7L5Bz1IwIuFFBDWIoagCnw00zeZR0uoL')
 


 const User = require("../models/users");
 const { authenticateToken } = require("./userAuth");

// Add book to cart
router.put("/add-to-cart", authenticateToken, async (req, res) => {
    try {
        const { bookid, id } = req.headers;

        // Validate ObjectId format
        if (!mongoose.Types.ObjectId.isValid(id) || !mongoose.Types.ObjectId.isValid(bookid)) {
            return res.status(400).json({ message: "Invalid Book ID or User ID format" });
        }

        const userData = await User.findById(id);
        if (!userData) {
            return res.status(404).json({ message: "User not found" });
        }

        const isBookInCart = userData.cart.includes(bookid);
        if (isBookInCart) {
            return res.status(200).json({
                status: "success",
                message: "Book is already in cart",
            });
        }

        await User.findByIdAndUpdate(id, {
            $push: { cart: bookid },
        });

        return res.status(200).json({
            status: "success",
            message: "Book added to cart",
        });
    } catch (err) {
        console.error('Error adding book to cart:', err.message);
        res.status(500).json({ message: "An error occurred", details: err.message });
    }
});
router.put("/remove-from-cart/:bookid", authenticateToken, async (req, res) => {
    try {
        const { bookid } = req.params;
        const { id } = req.headers;
        await User.findByIdAndUpdate(id ,  {


            
            $pull: { cart: bookid},
        });
        return res.json({
            status: "success",
            massage: "book removed from cart"
            
        });

        

    } catch (error) {
   
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
});

router.get("/get-user-cart" ,  authenticateToken, async(req, res)=>{
    try{
        const {id} = req.headers;
        const userData = await User.findById(id).populate("cart");
         const cart = userData.cart.reverse(); //using the reverse fumction is due to when the user cart itm get back to top 
         return res.json({status: "success", data: cart});

    }
    catch(error){
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
})

module.exports = router;
