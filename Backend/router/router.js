import express from "express";
const router = express.Router()
import Payment from "../Controller/Payment.js";
import PayMethod from "../Controller/PayMethod.js";

router.post('/orders', PayMethod.createOrder);
router.get('/payment/:paymentId', PayMethod.fetchPayment);



router.post("/createtransation", Payment.createPayment);
router.get("/alltransaction", Payment.AllTransaction);
router.get("/:id", Payment.TransactionbyID)
router.delete("/:id", Payment.TransectionDelete)

export default router;