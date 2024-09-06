

const express = require('express');
const Stripe = require('stripe');
const router = express.Router(); // Initialize router correctly
const stripe = Stripe('sk_test_51Pj1w2BqjnFp5nQH8VDa0VYlUAMMZ727apZziXulvHk1FjSzmGN3T1NosCay4Td2fe7L5Bz1IwIuFFBDWIoagCnw00zeZR0uoL');
const { authenticateToken } = require("./userAuth");
const Order = require('../models/order'); // Import Order model correctly

// Confirm payment route
router.post("/confirm-payment", authenticateToken, async (req, res) => {
  const { paymentIntentId } = req.body;

  try {
      const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

      if (paymentIntent.status === "succeeded") {
          // Update order status to "Paid"
          const order = await Order.findOne({ paymentIntentId });
          if (order) {
              order.status = "Paid";
              await order.save();
          }
          return res.status(200).json({ message: "Payment successful" });
      } else {
          return res.status(400).json({ message: "Payment not successful" });
      }
  } catch (error) {
      res.status(500).json({ message: "An error occurred", details: error.message });
  }
});

// Create payment intent route
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
router.get('/payment-success', (req, res) => {
    res.status(200).json({ message: 'Payment was successful!' });
    
});

module.exports = router;
