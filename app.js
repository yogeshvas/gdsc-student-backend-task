import express from "express";
import cors from "cors";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes.js";
import { User } from "./models/user.js";

dotenv.config();

// Routes
app.use("/api/v1/users", userRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Connect to Database and Start Server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`⚙️ Server is running at port : ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
