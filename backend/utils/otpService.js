// otpService.js
const verifyOtp = async (phone, otp) => {
    // Fetch the OTP record for the phone number from the database
    const otpRecord = await getOtpRecordFromDatabase(phone);
  
    if (!otpRecord) {
      return false;
    }
  
    // Check if the provided OTP matches the stored OTP
    return otp === otpRecord.otp;
  };
  
  module.exports = { verifyOtp };
  