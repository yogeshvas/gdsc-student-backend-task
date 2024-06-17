import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNo: {
      type: Number,
      unique: true,
    },
    age: {
      type: Number,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
