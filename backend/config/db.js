import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const url = "mongodb://0.0.0.0:27017/shop";
        const conn = await mongoose.connect(url);
        // const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongodb connected to ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(`Error: ${error.message}`.red.underline.bold);
        process.exit(1);
    }
}

export default connectDB;