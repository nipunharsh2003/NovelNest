
const express = require("express");
const cors = require("cors"); 
const app = express();

require("dotenv").config();
require("./connection/connection");

const port = process.env.PORT || 3000;

// Use the CORS middleware
app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['get', 'post', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'id','bookid'],

 // Allowed HTTP methods
    credentials: true, // Allow credentials like cookies
}));

// Other middleware and routes
app.use(cors({
    origin: 'https://novelnest-frontend.onrender.com',
}));
app.use(express.json());

const User = require("./routes/user");
const Books = require("./routes/book");
const Favourite = require("./routes/favourite");
const Cart = require("./routes/cart");
const Order = require("./routes/order");
const stripe = require("stripe")(process.env.STRIPE_SECRET);
const payment = require("./routes/payment");
app.get('/payment-success', (req, res) => {
    res.status(200).json({ message: 'Payment was successful!' });
    
});

app.get("/", (_req, res) => {
    res.send("Hello World");
});

app.use("/api", User);
app.use("/api", Books);
app.use("/api", Favourite);
app.use("/api", Cart);
app.use("/api", Order);
app.use("/api", payment)


app.listen(port, (err) => {
    if (err) {
        console.error('Error starting server:', err);
    } else {
        console.log(`Server running on port ${port}`);
    }
});
