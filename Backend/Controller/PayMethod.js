import Razorpay from "razorpay";
import dotenv from "dotenv";
dotenv.config();
 

// Create a new Razorpay instance
const razorpayInstance = new Razorpay({
    key_id: "rzp_test_GcZZFDPP0jHtC4",
    key_secret: "6JdtQv2u7oUw7EWziYeyoewJ"
});

const PayMethod = {

// Controller for creating a new order
 createOrder: async (req, res) => {
    const options = {
        amount: req.body.amount, // amount in the smallest currency unit
        currency: req.body.currency,
        receipt: "receipt#1",
        payment_capture: 1
    };

    try {
        const response = await razorpayInstance.orders.create(options);
        res.json({
            order_id: response.id,
            currency: response.currency,
            amount: response.amount
        });
    } catch (error) {
        res.status(500).send("Internal server error");
    }
},

// Controller for fetching a payment
 fetchPayment : async (req, res) => {
    const { paymentId } = req.params;

    try {
        const payment = await razorpayInstance.payments.fetch(paymentId);
        if (!payment) {
            return res.status(500).json("Error at Razorpay loading");
        }

        res.json({
            status: payment.status,
            method: payment.method,
            amount: payment.amount,
            currency: payment.currency
        });
    } catch (error) {
        res.status(500).json("Failed to fetch payment");
    }
},




}
export default PayMethod