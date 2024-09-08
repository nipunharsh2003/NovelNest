const nodemailer = require("nodemailer");
const User = require("../models/users");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "nipunharsh139@gmail.com", // Your email address
        pass: "xqwbjhkmfilaampg", // Your email password or app password
    },
});

const sendVerificationEmail = async (email, password) => {
    try {
        const info = await transporter.sendMail({
            from: 'nipunharsh139@gmail.com', // Your email address
            to: email,
            subject: 'Welcome to NovelNest! Your Login Credentials',
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Account Information</title>
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
                        .password {
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
                        <p>Here are your login credentials. Please keep them safe:</p>
                        <div><strong>Email:</strong> ${email}</div>
                        <div class="password"><strong>Password:</strong> ${password}</div>
                        <p>You can log in using these credentials at any time. If you did not register with us, please contact our support team.</p>
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

module.exports = { sendVerificationEmail };


