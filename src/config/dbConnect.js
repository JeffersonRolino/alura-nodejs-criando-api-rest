import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connectToDataBase(){
    mongoose.connect(process.env.DB_KEY);

    return mongoose.connection;
};

export default connectToDataBase;