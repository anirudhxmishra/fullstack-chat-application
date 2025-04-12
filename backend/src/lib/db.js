import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Ensure environment variables are loaded

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL, {});
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ MongoDB Connection Error:`, error);
        process.exit(1); // Exit process on failure
    }
};
