import PaymentModel from "../Model/PaymentSchema.js";

const Payment = {
        createPayment : async(req,res)=>{
            try {
                const {Amount, Currency, Status, Method, Username, TransactionID, OrderID} = req.body

                if(Amount && Currency && Status && Method && Username && TransactionID && OrderID){
                    const doc = new PaymentModel({
                        Amount:Amount,
                        Currency:Currency,
                        Status:Status,
                        Method:Method,
                        Username:Username,
                        TransactionID:TransactionID,
                        OrderID
                    })
                    const result = await doc.save()
                    res.status(201).send({"status":"Success", "message": "Transaction successfuly Create", "result":result})
                }else{
                    res.status(400).send({"status":"failed", "message":"All feileds are requried", })
                }
            } catch (error) {
            res.status(500).send({"status":"failed", "message":"An error occurred", error: error.message})
                
            }
        },



        AllTransaction : async(req,res) => {
            try {
                const result =await PaymentModel.find()
                if(result){
                    res.status(200).send({"status":"success", "message":"All Transection sucessfully show ", "result": result})
                }else{
                    res.status(400).send({"Ststus":"failed", "message":"Given Information is not valid"})
                }
            } catch (error) {
                req.status(500).send({"status":"failed", "message":"An error occurred", error: error.message})
            }
        },

        TransactionbyID : async(req,res)=>{
            try {
                const id  = await req.params.id
                if(!id){
                    res.status(400).send({"status":"failed", "message":"Give vailed information"})
                }
                const result = await PaymentModel.findById(id);
                if(result){
                    res.status(200).send({"status":"Success", "message":"Data Successfully Deleted", "result":result})
                }else{
                    res.status(400).send({"status":"failed","message":"Get transaction failed", })
                }
            } catch (error) {
                res.status(500).send({"status":"failed","message":"An error occurred", error: error.message})
            }
        },


        TransectionDelete : async(req, res) =>{
            try {
                const id = req.params.id
                if(!id){
                    res.status(400).send({"status":"failed", "message":"Give vailed Information"})
                }
                const result = await PaymentModel.findByIdAndDelete(id);
                if(result){
                    res.status(200).send({"status":"Success", "message":"Transaction Successfully Deleted", "result": result})
                }else{
                    res.status(400).send({"status":"Failed", "message":"Transaction not deleted"})
                }
            } catch (error) {
                
            }
        }



}
export default Payment