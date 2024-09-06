const router = require("express").Router();
const User = require("../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {authenticateToken} = require("./userAuth");
const {sendVerificationEmail} = require("../utils/email")
const {sendOTP} =require('../utils/twilio')
const {generateOtp} = require('../utils/otpUtils')
const otpService = require('../utils/otpService'); // Your OTP service module
 // Replace with correct path to your utility functions



// Sign-in user
router.post("/sign-in",async (req, res) => {
    try {
        const { username, password } = req.body;
        const existingUser = await User.findOne({ username });

        if (!existingUser) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Compare password //secret key = bookStore123
        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (isMatch) {

            const authClains = [
                {
                    name: existingUser.username
                },
                {
                    role: existingUser
                }
                ,
            ];
            const token = jwt.sign({ authClains }, "bookStore123", { expiresIn: "30d", });
            return res.status(200).json({
                id: existingUser._id,
                role: existingUser.role,
                token: token,
            }); //message: "Sign-in successful"
        } else {
            return res.status(400).json({ message: "Invalid credentials" });
        }

    } catch (error) {
        console.error(error); // Log the error for debugging
        return res.status(500).json({ message: "Internal server error" });
    }
});



router.post('/signup', async (req, res) => {
  try {
    const { username, email, password, address, phone } = req.body;

    // Validate input fields
    if (!phone || !email || !password || !address || !username) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Hash password
    const hashPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      username,
      email,
      password: hashPassword,
      address,
      phone: `+91${phone}` // Ensure correct format
    });

    // Generate and store OTP
    const otp = generateOtp();
    newUser.otp = otp;
    await newUser.save();

    // Send OTP to user's phone
    await sendOTP( newUser.otp);
    await sendVerificationEmail(email);


    return res.status(200).json({ message: 'Signup successful, OTP sent to your phone' });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});
router.post('/verify-otp', async (req, res) => {
  const { otp } = req.body;

  if (!otp) {
    return res.status(400).json({ message: 'OTP is required' });
  }

  try {
    // Find the user who has the given OTP
    const user = await User.findOne({ otp });

    if (!user) {
      return res.status(404).json({ message: 'User not found or OTP is incorrect' });
    }

    // OTP is correct, proceed to complete the signup or mark as verified
    user.otp = null; // Clear the OTP after successful verification
    user.isVerified = true; // Mark user as verified if needed
    await user.save();

    return res.status(200).json({ message: 'OTP verified successfully' });
  } catch (error) {
    console.error('Error during OTP verification:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});







// //get user information
// router.get("/get-user-information",authenticateToken ,async (req , res) =>{
//     try{
//            const { id} = req.headers;
//            const data = await User.findById(id).select('-password');  //.select("-password") //we not need password as showing so we use this  it exclude the password not include it
//            return res.status(200).json(data);
//     }
//     catch(error){
//         return res.status(500).json({ message: "Internal server error" });

//     }

// });
router.get("/get-user-information", authenticateToken, async (req, res) => {
  try {
    const { id } = req.headers;

    if (!id) {
      return res.status(403).json({ message: "Forbidden: User ID is required" });
    }

    const data = await User.findById(id).select('-password');

    if (!data) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching user information:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.put("/update-address", authenticateToken, async (req, res) => {
    try {
        const { id } = req.headers;
        const { address } = req.body;

        if (!id || !address) {
            return res.status(400).json({ message: "Invalid data" });
        }

        const updatedUser = await User.findByIdAndUpdate(id, { address }, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json({ message: "Address updated successfully" });
    } catch (error) {
        console.error("Error updating address:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});
router.post('/reset-password/:token', async (req, res) => {
  const { password } = req.body;
  const resetToken = req.params.token;

  const user = await User.findOne({
    resetToken,
    resetTokenExpire: { $gt: Date.now() } // Ensure token is still valid
  });

  if (!user) {
    return res.status(400).json({ message: "Invalid or expired token" });
  }

  // Hash the new password before saving
  user.password = bcrypt.hashSync(password, 10);
  user.resetToken = undefined;
  user.resetTokenExpire = undefined;

  await user.save();
  res.status(200).json({ message: "Password updated successfully" });
});
router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // Generate reset token
  const resetToken = crypto.randomBytes(32).toString('hex');
  user.resetToken = resetToken;
  user.resetTokenExpire = Date.now() + 3600000; // Token expires in 1 hour

  await user.save();

  const resetUrl = `http://localhost:3000/reset-password/${resetToken}`;
  const message = `Reset your password using this link: ${resetUrl}`;

  try {
    await sendEmail({ email: user.email, subject: 'Password Reset', message });
    res.status(200).json({ message: 'Email sent' });
  } catch (error) {
    user.resetToken = undefined;
    user.resetTokenExpire = undefined;
    await user.save();
    res.status(500).json({ message: 'Email could not be sent' });
  }
});



module.exports = router;






