
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique:true, },
    email: { type: String, required: true, unique: true, },
    password: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true, unique: false},
    otp: { type: String, default: null }, // Store OTP temporarily
    isVerified: { type: Boolean, default: false },
    avtor: { type: String, default: 'https://cdn-icons-png.flaticon.com/128/3177/3177440.png' },
    role: { type: String, default: 'user', enum: ["user", "admin"] },
    favourites: [{ type: mongoose.Schema.Types.ObjectId, ref: "books" }],
    cart: [{ type: mongoose.Schema.Types.ObjectId, ref: "books" }],
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "order" }]
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);