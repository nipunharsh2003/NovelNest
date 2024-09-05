// const express = require("express");
// const router = express.Router();

// const User = require("../models/users");
// const { authenticateToken } = require("./userAuth");


// router.put("/add-book-to-favourites", authenticateToken, async (req, res) => {
//     try {
//          const {bookid, id} = req.headers;
//          const userData = await User.findById(id);
//          const isBookFavourite = userData.favourites.includes(bookid);
//          if(!isBookFavourite){
//            return  res.status(200).json({ message: "Book is already in  favourites " });
//          }
//          await User.findByIdAndUpdate(id , {$push: {favourites: bookid}});
         
  
//     return    res.status(200).json({ message: "Book added to favourites successfully" });
//     } catch (error) {
//         console.error('Error adding book to favourites:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// module.exports = router;
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/users");
const { authenticateToken } = require("./userAuth");

router.put("/add-book-to-favourites", authenticateToken, async (req, res) => {
    try {
        const { bookid, id } = req.headers;

        // Validate ObjectId format
        if (!mongoose.Types.ObjectId.isValid(id) || !mongoose.Types.ObjectId.isValid(bookid)) {
            return res.status(400).json({ error: "Invalid book ID or user ID format" });
        }

        const userData = await User.findById(id);
        if (!userData) {
            return res.status(404).json({ error: "User not found" });
        }

        const isBookFavourite = userData.favourites.includes(bookid);

        if (isBookFavourite) {
            return res.status(200).json({ message: "Book is already in favourites" });
        }

        await User.findByIdAndUpdate(id, { $push: { favourites: bookid } });
        return res.status(200).json({ message: "Book added to favourites successfully" });

    } catch (error) {
        console.error('Error adding book to favourites:', error.message);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
});
router.put("/delete-book-from-favourites", authenticateToken, async (req, res) => {
    try {
        const { bookid, id } = req.headers;

        // Validate ObjectId format
        if (!mongoose.Types.ObjectId.isValid(id) || !mongoose.Types.ObjectId.isValid(bookid)) {
            return res.status(400).json({ error: "Invalid book ID or user ID format" });
        }

        const userData = await User.findById(id);
        if (!userData) {
            return res.status(404).json({ error: "User not found" });
        }

        const isBookFavourite = userData.favourites.includes(bookid);

        if (isBookFavourite) {
            await User.findByIdAndUpdate(id, { $pull: { favourites: bookid } });
        }

     
        return res.status(200).json({ message: "Book rmoved from  favourites successfully" });

    } catch (error) {
   
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
});
router.get("/get-favourites-books", authenticateToken, async (req, res) => {
    try {
        const {id} = req.headers;
        const userData = await User.findById(id).populate("favourites");
        const favouriteBooks = userData.favourites;
        return res.json({status: "success",
            data: favouriteBooks,
            
        });
        //their was something problemm in this
        
        
    } catch (error) {
        console.log(error);
   
        res.status(500).json({ massage: "an error occurred"});
    }
});

module.exports = router;



