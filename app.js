import express from "express";
import cors from "cors";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes.js";
import { User } from "./models/user.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(bodyParser.json());

const dummyUsers = [
  {
    name: "Alice Smith",
    email: "alice.smith@example.com",
    phoneNo: 1234567890,
    age: 10,
  },

  {
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    phoneNo: 1234567891,
    age: 50,
  },
  {
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    phoneNo: 1234567892,
    age: 10,
  },
  {
    name: "Daisy Miller",
    email: "daisy.miller@example.com",
    phoneNo: 1234567893,
    age: 80,
  },
  {
    name: "Ethan Davis",
    email: "ethan.davis@example.com",
    phoneNo: 1234567894,
    age: 90,
  },
  {
    name: "Fiona White",
    email: "fiona.white@example.com",
    phoneNo: 1234567895,
    age: 16,
  },
  {
    name: "George Harris",
    email: "george.harris@example.com",
    phoneNo: 1234567896,
    age: 13,
  },
  {
    name: "Hannah Clark",
    email: "hannah.clark@example.com",
    phoneNo: 1234567897,
    age: 12,
  },
  {
    name: "Ian Lewis",
    email: "ian.lewis@example.com",
    phoneNo: 1234567898,
    age: 32,
  },
  {
    name: "Jane Walker",
    email: "jane.walker@example.com",
    phoneNo: 1234567899,
    age: 56,
  },
  {
    name: "Kyle Hall",
    email: "kyle.hall@example.com",
    phoneNo: 1234567800,
    age: 10,
  },
  {
    name: "Laura Allen",
    email: "laura.allen@example.com",
    phoneNo: 1234567801,
    age: 34,
  },
  {
    name: "Michael Young",
    email: "michael.young@example.com",
    phoneNo: 1234567802,
    age: 66,
  },
  {
    name: "Nina King",
    email: "nina.king@example.com",
    phoneNo: 1234567803,
    age: 10,
  },
  {
    name: "Oscar Wright",
    email: "oscar.wright@example.com",
    phoneNo: 1234567804,
    age: 50,
  },
  {
    name: "Paula Green",
    email: "paula.green@example.com",
    phoneNo: 1234567805,
    age: 90,
  },
];

app.get("/multi", async (req, res) => {
  try {
    const response = await User.insertMany(dummyUsers);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

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
