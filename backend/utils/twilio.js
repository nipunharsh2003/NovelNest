// utils/twilio.js
const twilio = require('twilio');
const phone  = require("../models/users")


const accountSid = process.env.ACCOUNT_SID; // replace with your Twilio SID
const authToken = process.env.AUTH_TOKEN;  // replace with your Twilio Auth Token
const client = twilio(accountSid, authToken);

const sendOTP = (otp) => {
    return client.messages.create({
        body: `Your OTP code is ${otp}`,
        from: '+15188325246', // replace with your Twilio phone number
        to:'+917206213750',
    });
};

module.exports = { sendOTP };
