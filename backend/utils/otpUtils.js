const generateOtp = () => {
    // Generate a 6-digit OTP
    return Math.floor(100000 + Math.random() * 900000).toString();
  };
  
  const sendOtpToUser = (phone, otp) => {
    // Implement SMS sending logic here
    console.log(`Sending OTP: ${otp} to phone: ${phone}`);
    // For example, use a service like Twilio or Nexmo
  };
  
  module.exports = { generateOtp, sendOtpToUser };
  