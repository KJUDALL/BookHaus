import { User, Post, Comment, Book } from "../models/index.js";
import process from "process";

const cleanDB = async (): Promise<void> => {
	try {
		await User.deleteMany({});
		console.log("Profile collection cleaned.");

		await Post.deleteMany({});
		console.log("Post collection cleaned.");

		await Comment.deleteMany({});
		console.log("Comment collection cleaned.");

		await Book.deleteMany({});
		console.log("Book collection cleaned.");
	} catch (err) {
		console.error("Error cleaning up collections:", err);
		process.exit(1);
	}
};

export { cleanDB };
