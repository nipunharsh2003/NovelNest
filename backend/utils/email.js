const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "nipunharsh139@gmail.com",
        pass: "xqwbjhkmfilaampg",
    },
});

// const sendVerificationEmail = async (email) => {
//     try {
//         const info = await transporter.sendMail({
//             from: 'nipunharsh139@gmail.com',
//             to: email,
//             subject: 'Verification for novelnest Registration',
//             html: `Your OTP for verification to register with novelnest.`,
//         });

//         console.log('Email sent:', info.response);
//     } catch (error) {
//         console.log('Error sending email:', error);
//     }
// };
const sendVerificationEmail = async (email, otp) => {
    try {
        const info = await transporter.sendMail({
            from: 'nipunharsh139@gmail.com', // Your email address
            to: email,
            subject: 'Welcome to NovelNest! Please Verify Your Email',
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Email Verification</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            background-color: #f5f5f5;
                            color: #333;
                            padding: 20px;
                            margin: 0;
                        }
                        .container {
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 20px;
                            background-color: #ffffff;
                            border-radius: 8px;
                            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                        }
                        h1 {
                            color: #007bff;
                            font-size: 24px;
                            margin-bottom: 10px;
                        }
                        p {
                            font-size: 16px;
                            line-height: 1.5;
                            margin-bottom: 20px;
                        }
                        .otp {
                            display: inline-block;
                            padding: 10px 20px;
                            font-size: 18px;
                            font-weight: bold;
                            color: #ffffff;
                            background-color: #007bff;
                            border-radius: 4px;
                        }
                        .footer {
                            margin-top: 20px;
                            font-size: 14px;
                            color: #666;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <h1>Thank You for Registering with NovelNest!</h1>
                        <p>To complete your registration and verify your email address, please use the OTP code provided below:</p>
                        <div class="otp">${otp}</div>
                        <p>If you did not register with us, please ignore this email.</p>
                        <div class="footer">
                            Best regards,<br>
                            The NovelNest Team
                        </div>
                    </div>
                </body>
                </html>
            `,
        });

        console.log('Email sent:', info.response);
    } catch (error) {
        console.log('Error sending email:', error);
    }
};


module.exports = {sendVerificationEmail};
