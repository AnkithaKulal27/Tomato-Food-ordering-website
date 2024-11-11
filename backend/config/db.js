import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://AnkithaKulal:54321@cluster0.knu2r.mongodb.net/food_delivery_project"
    )
    .then(() => console.log("DB Connected"));
};
