import mongoose from "mongoose";

const connectDB = async () => {
  if (process.env.MONGO_URI) {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongoDB connected ${connect.connection.host}`);
  }
};

module.exports = connectDB;
