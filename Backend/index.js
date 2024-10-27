// import dotenv from "dotenv"
// dotenv.config();
// import express from  "express"
// import bodyParser from "body-parser";
// import cors from "cors"
// import Razorpay from "razorpay"
// import ConnectedDB from "./Db/db.js";
// import router from "./router/router.js";

// const app = express();
// const PORT = process.env.PORT || 5000;
// const DATABASE_URL = process.env.DATABASE_URL
// ConnectedDB(DATABASE_URL);

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(cors());

// app.get("/",(req,res)=>{
//     res.send("WellCome To Razorpay App")
// })

// app.post('/orders', async (req,res) =>{
//     const razorpay = new Razorpay({
//         key_id : "rzp_test_GcZZFDPP0jHtC4",
//         key_secret: "6JdtQv2u7oUw7EWziYeyoewJ"
//     })

//     const option = {
//         amount: req.body.amount,
//         currency: req.body.currency,
//         receipt: "receipt#1",
//         payment_capture: 1
//     }
    
//     try {
//         const response = await razorpay.orders.create(option)

//         res.json({
//             order_id: response.id,
//             currency: response.currency,
//             amount: response.amount
//         })
//     } catch (error) {
//         res.status(500).send("Internal server error")
//     }
// })




// app.get("/payment/:paymentId", async(req, res) =>{
//     const {paymentId} = req.params;

//     const razorpay = new Razorpay({
//         key_id: "rzp_test_GcZZFDPP0jHtC4",
//         key_secret: "6JdtQv2u7oUw7EWziYeyoewJ"
//     })

//     try {
//         const payment = await razorpay.payments.fetch(paymentId)
//         if(!payment){
//             return res.status(500).json("Error at razorpay loading")
//         }
//         res.json({
//             status: payment.status,
//             method: payment.method,
//             amount: payment.amount,
//             currency: payment.currency
//         })
//     } catch (error) {
//         res.status(500).json("failed to fetch")
//     }

// })
// app.use("/api", router)

// app.listen(PORT,()=>{
//     console.log(`server is running on http://localhost:${PORT}`)
// })





import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import ConnectedDB from "./Db/db.js";
import router from "./router/router.js";

const app = express();
const PORT = process.env.PORT || 5000;
const DATABASE_URL = process.env.DATABASE_URL;

// Connect to database
ConnectedDB(DATABASE_URL);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Base route
app.get("/", (req, res) => {
    res.send("Welcome To Razorpay App");
});

// API routes
app.use("/api", router);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

