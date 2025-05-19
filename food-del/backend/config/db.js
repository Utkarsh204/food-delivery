import mongoose from "mongoose";

export const connectDB = async () => {
     await mongoose.connect('mongodb+srv://yutkarsh39:9012255766@cluster0.pektdgp.mongodb.net/food-del').then(()=>console.log("MongoDB connected"));
}


