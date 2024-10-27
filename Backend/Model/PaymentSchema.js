import mongoose from "mongoose";

const PaymentData =  mongoose.Schema({
     Amount: {
        type: Number,
     } ,
     Currency: {
        type: String,
     },
     Status: {
        type: String,
     },
     Method: {
        type: String,
     },
     Username: {
        type: String,
     },
     TransactionID: {
        type: String,
     },
     OrderID: {
        type: String,
     }
})

const PaymentModel = mongoose.model("PaymentList", PaymentData)

export default PaymentModel
