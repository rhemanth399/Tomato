import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://rhemanth399:741628969@cluster0.ij7pqrc.mongodb.net/food-del')
    .then(()=>{
        console.log("DB Connected")
    })
}