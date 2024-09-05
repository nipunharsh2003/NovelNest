// routes/otpRoutes.js

const express = require('express');
const router = express.Router();
const { authenticateToken } = require('./userAuth');
const Otp = require('../models/otp');
const User = require('../models/user');
const { generateOtp } = require('../utils/otpUtils'); // Import OTP utility
const nodemailer = require('nodemailer');

// Function to send OTP via email
const sendOtpEmail = async (email, otp) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password',
        },
    });

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is ${otp}. It is valid for 15 minutes.`,
    };

    await transporter.sendMail(mailOptions);
};

// Route to generate and send OTP
router.post('/generate-otp', authenticateToken, async (req, res) => {
    try {
        const { id } = req.headers;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const otp = generateOtp();
        const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

        await Otp.findOneAndUpdate(
            { user: id },
            { otp, expiresAt },
            { upsert: true }
        );

        await sendOtpEmail(user.email, otp);

        return res.json({ status: 'success', message: 'OTP sent to your email' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
});

// Route to verify OTP and place an order
router.post('/verify-otp-and-place-order', authenticateToken, async (req, res) => {
    try {
        const { id } = req.headers;
        const { order, otp } = req.body;

        const otpRecord = await Otp.findOne({ user: id });
        if (!otpRecord) {
            return res.status(400).json({ error: 'OTP not found' });
        }

        if (otpRecord.otp !== otp || otpRecord.expiresAt < Date.now()) {
            return res.status(400).json({ error: 'Invalid or expired OTP' });
        }

        await Otp.deleteOne({ user: id });

        for (const orderData of order) {
            const newOrder = new Order({ user: id, book: orderData._id });
            const orderDataFromDb = await newOrder.save();

            await User.findByIdAndUpdate(id, {
                $push: { orders: orderDataFromDb._id },
            });

            await User.findByIdAndUpdate(id, {
                $pull: { cart: orderData._id },
            });
        }

        return res.json({
            status: "success",
            message: "Order placed successfully",
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
});

module.exports = router;
