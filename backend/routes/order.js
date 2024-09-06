
const express = require("express");
const router = express.Router();
const { authenticateToken } = require("./userAuth");
const Order = require("../models/order");
const User = require("../models/users");
const Stripe = require('stripe'); // Import Stripe first
const stripe = Stripe(process.env.STRIPE_SECRET); // Initialize Stripe with the secret key

router.post("/place-order", authenticateToken, async (req, res) => {
    try {
        const { id } = req.headers;
        const { order } = req.body;

        for (const orderData of order) {
            const newOrder = new Order({ user: id, book: orderData._id });
            const orderDataFromDb = await newOrder.save();

            // Saving order in user model
            await User.findByIdAndUpdate(id, {
                $push: { orders: orderDataFromDb._id },
            });

            // Clearing cart
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

router.post("/create-payment-intent", authenticateToken, async (req, res) => {
    try {
        const { id, orderId } = req.body;

        const order = await Order.findById(orderId).populate("book");
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        // Create a payment intent with Stripe
        const paymentIntent = await stripe.paymentIntents.create({
            amount: order.book.price * 100, // Stripe expects the amount in cents
            currency: 'usd',
            metadata: { orderId: order._id.toString(), userId: id },
        });

        // Save the paymentIntent ID to the order
        order.paymentIntentId = paymentIntent.id;
        await order.save();

        return res.status(200).json({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        res.status(500).json({ message: "An error occurred", details: error.message });
    }
});

router.post("/get-order-history", authenticateToken, async (req, res) => {
    try {
        const { id } = req.headers;
        
        // Fetch user data and populate the orders with associated books
        const userData = await User.findById(id).populate({
            path: "orders",
            populate: { path: "book" },
        });

        // Reverse the order history to show the most recent first
        const ordersData = userData.orders.reverse();

        return res.status(200).json({
            status: "success",
            data: ordersData,
        });
    } catch (error) {
        console.error('Error fetching order history:', error.message);
        return res.status(500).json({ message: "An error occurred", details: error.message });
    }
});

// Get all orders - admin
router.get("/get-all-orders", authenticateToken, async (req, res) => {
    try {
        const userData = await Order.find()
            .populate({
                path: "book",
            })
            .populate({
                path: "user",
            })
            .sort({ createdAt: -1 });

        return res.json({
            status: "Success",
            data: userData,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "An error occurred" });
    }
});

// Update order status - admin
router.put("/update-status/:id", authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        await Order.findByIdAndUpdate(id, { status: req.body.status });
        return res.json({
            status: "Success",
            message: "Status Updated Successfully",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "An error occurred" });
    }
});

// Create Stripe Checkout Session
// router.post('/create-checkout-session', async (req, res) => {
//     const { orderId } = req.body;

//     try {
//         // Fetch the order details
//         const order = await Order.findById(orderId).populate('book');
//         if (!order) {
//             return res.status(404).json({ message: 'Order not found' });
//         }

//         // Create a checkout session with Stripe
//         const session = await stripe.checkout.sessions.create({
//             payment_method_types: ['card'],
//             line_items: [
//                 {
//                     price_data: {
//                         currency: 'usd',
//                         product_data: {
//                             name: order.book.title,
//                         },
//                         unit_amount: order.book.price * 100, // Amount in cents
//                     },
//                     quantity: 1,
//                 },
//             ],
//             mode: 'payment',
//             success_url: 'http://localhost:8100/payment-success',
//             cancel_url: 'http://localhost:8100/payment-failure',
//         });

//         // Return the session ID with the key sessionId
//         res.json({ sessionId: session.id });
//     } catch (error) {
//         res.status(500).json({ message: 'An error occurred', details: error.message });
//     }
// });
router.post('/create-checkout-session', async (req, res) => {
    const { orderIds } = req.body; // Expecting an array of orderIds

    try {
        // Fetch the orders and populate the books
        const orders = await Order.find({ _id: { $in: orderIds } }).populate('book');

        if (orders.length === 0) {
            return res.status(404).json({ message: 'No orders found' });
        }

        // Create line items for each order
        const lineItems = orders.map(order => ({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: order.book.title,
                },
                unit_amount: order.book.price * 100, // Amount in cents
            },
            quantity: 1,
        }));

        // Create a checkout session with Stripe
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: 'http://localhost:5173/',
            cancel_url: 'http://localhost:8100/payment-failure',
        });

        // Return the session ID
        res.json({ sessionId: session.id });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', details: error.message });
    }
});
router.get('/payment-success', (req, res) => {
    res.status(200).json({ message: 'Payment was successful!' });
});


module.exports = router;


module.exports = router;
