//all the rule for users

// "password":"admin12333"
const router = require("express").Router();
const User = require("../models/users");

const jwt = require("jsonwebtoken");
const Book = require("../models/book")
const { authenticateToken } = require("./userAuth");

router.post("/add-book", authenticateToken, async (req, res) => {
    try {
        //creating a new book
        const {id} = req.headers; //check the user is admin or nt
        const user = await User.findById(id);
        if(user.role !== "admin")
        {
           return res.status(400).json({ massage: "you are not allowed to access this only admin can do this" });
        }
        const book = new Book({
            url: req.body.url,
            title: req.body.title,
            author: req.body.author,
            price: req.body.price,
            description: req.body.description,
            language: req.body.language,
        });
        await book.save();
        res.status(200).json({ massage: "books addes successfully" });


    }
    catch (error) {
        res.status(500).json({ massage: "internal server error" });

    }
});
router.put("/update-book" , authenticateToken, async (req , res)=>{
    try{
        const {bookid}= req.headers;
       await Book.findByIdAndUpdate(bookid,{
            url: req.body.url,
            title: req.body.title,
            author: req.body.author,
            price: req.body.price,
            description: req.body.description,
            language: req.body.language,
        });
        return res.status(200).json({massage: "book updated successfully"});
    }
    catch(error){
        return res.status(500).json({massage: "an error occured"});

    }
});
router.delete("/delete-book", authenticateToken, async (req, res) => {
    try {
        const { bookid } = req.headers;
        
        if (!bookid) {
            return res.status(400).json({ message: "Book ID is required" });
        }

        const book = await Book.findByIdAndDelete(bookid);

        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        return res.status(200).json({
            message: "Book deleted successfully"
        });

    } catch (error) {
        console.error("Error deleting the book:", error);
        return res.status(500).json({ message: "An error occurred" });
    }
});



router.get("/get-all-books" ,  async (req , res)=>{
    try{
        const books  = await Book.find().sort({createAt: -1}); 
        return res.json({status:"success", data: books,});
         
    }
    catch(error){
        return res.status(500).json({massage: "an error occured"});

    }
});

router.get("/get-recent-books" ,  async (req , res)=>{
    try{
        const books  = await Book.find().sort({createAt: -1}).limit(4); 
        return res.json({status:"success", data: books,});
         
    }
    catch(error){
        return res.status(500).json({massage: "an error occured"});

    }
});

router.get("/get-book-by-id/:id" ,  async (req , res)=>{
    try{
        const { id } = req.params;
        const book  = await Book.findById(id);
        return res.json({status:"success", data: book,});
         
    }
    catch(error){
        return res.status(500).json({massage: "an error occured"});

    }
});
router.get('/search-books', async (req, res) => {
    const { query } = req.query;
    try {
        const books = await Book.find({ title: new RegExp(query, 'i') });
        res.json({ data: books });
    } catch (error) {
        res.status(500).json({ message: 'Error searching books' });
    }
});



module.exports = router;