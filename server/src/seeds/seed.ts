import { connectToDatabase } from "../config/connection";
import mongoose from "mongoose";
import { User, Post, Book, Comment } from "../models";
import { cleanDB } from "./cleanDB";

import commentData from "./commentData.json" assert { type: "json" };
import postData from "./postData.json" assert { type: "json" };
import userData from "./userData.json" assert { type: "json" };
import bookData from "./bookData.json" assert { type: "json" };

const seedDB = async () => {
	try {
		await connectToDatabase();

		await cleanDB();

		const users = await User.insertMany(userData);
		const posts = await Post.insertMany(postData);
		const comments = await Comment.insertMany(commentData);
		const books = await Book.insertMany(bookData);

		console.log("Database seeded successfully!");
	} catch (err) {
		console.error("Error seeding database:", err);
	}
};

seedDB();
