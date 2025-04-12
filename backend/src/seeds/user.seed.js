import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  {
    email: "yash@example.com",
    fullName: "Yash",
    password: "123456",
    profilePic: "",
  },
  {
    email: "kanishka@example.com",
    fullName: "Kanishka",
    password: "123456",
    profilePic: "",
  },
  {
    email: "shudhanshu@example.com",
    fullName: "Shudhanshu",
    password: "123456",
    profilePic: "",
  },
  {
    email: "kuldeep@example.com",
    fullName: "Kuldeep",
    password: "123456",
    profilePic: "",
  },
  {
    email: "amna@example.com",
    fullName: "Amna",
    password: "123456",
    profilePic: "",
  },
  {
    email: "ayesha@example.com",
    fullName: "Ayesha",
    password: "123456",
    profilePic: "",
  },
  {
    email: "mohsin@example.com",
    fullName: "Mohsin",
    password: "123456",
    profilePic: "",
  },
  {
    email: "yashasvi@example.com",
    fullName: "Yashasvi",
    password: "123456",
    profilePic: "",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}; 

// Call the function
seedDatabase();
