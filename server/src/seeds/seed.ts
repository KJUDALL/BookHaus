import { connectToDatabase } from "../config/connection.js";
import mongoose from "mongoose";
import { Comment } from "../models/index.js";
import { Book } from "../models/index.js";
import { Post } from "../models/index.js";
import { User } from "../models/index.js";
import { cleanDB } from "./cleanDB.js";

import commentData from "./commentData.json" assert { type: "json" };
import postData from "./postData.json" assert { type: "json" };
import userData from "./userData.json" assert { type: "json" };
import bookData from "./bookData.json" assert { type: "json" };

const seedDB = async () => {
	try {
		await connectToDatabase();

		await cleanDB();

		const users = await User.insertMany(userData);
		const newPostData = postData.map((data, i) => {
			const newPostObject = {
				...data,
				user: users[i]._id,
			};
			return newPostObject;
		});
		const posts = await Post.insertMany(newPostData);

		const newCommentData = commentData.map((data, i) => {
			const newCommentObject = {
				...data,
				user: users[i]._id,
				post: posts[i]._id,
			};
			return newCommentObject;
		});
		const comments = await Comment.insertMany(newCommentData);
		const books = await Book.insertMany(bookData);

		console.log("Database seeded successfully!");
	} catch (err) {
		console.error("Error seeding database:", err);
	}
};

seedDB();
