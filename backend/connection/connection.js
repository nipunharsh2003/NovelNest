
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
