// const mongoose = require("mongoose");

// const conn = async () => {
//     try{
//         await mongoose.connect(`${process.env.URI}`);
//         console.log(process.env.URI);
//         console.log("connected to dtabase");
//     }
//     catch(error) {
//         console.log(error);
//     }
// };
// conn();

//v8PXIafE9fcJjeBi database -user password
// const mongoose = require('mongoose');
// require('dotenv').config();

// const conn = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('MongoDB connected');
//   } catch (err) {
//     console.error('Error connecting to MongoDB:', err);
//   }
// };

// conn();
const mongoose = require("mongoose");

const conn = async () => {
    try {
        // Attempt to connect to the MongoDB database
        await mongoose.connect(process.env.URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000 // Optional: Adjust the timeout
        });
        console.log("Connected to database");
    } catch (error) {
        // Log the error and provide more context
        console.error("Error connecting to the database:", error.message);
    }
};

// Initiate the connection
conn();
