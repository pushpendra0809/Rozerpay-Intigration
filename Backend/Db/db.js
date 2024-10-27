import mongoose from "mongoose";

const ConnectedDB = async(DATABASE_URL) => {
    try {
        const Db_option={
            dbName:"mxtertask",
        }
        mongoose.connect(DATABASE_URL, Db_option)
        console.log("Database Successfully connected")
    } catch (error) {
        console.log(error)
    }
}

export default ConnectedDB