import mongoose from "mongoose";

 export const connectDB = async () => {
  (
    await mongoose.connect(
      "mongodb+srv://satish018:Gs312828@cluster0.mt7ee.mongodb.net/food-del"
    ).then(() => {
        console.log("DB Connected");
      })
  )
};
