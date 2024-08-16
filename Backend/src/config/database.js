import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  await mongoose
    .connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    .then(() => {
      console.log(`database connected`);
    })
    .catch((error) => {
      console.log(error);
    });
};
export default connectDB;
