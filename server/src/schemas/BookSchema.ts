import mongoose, { Schema } from "mongoose";

const BookSchema: Schema = new Schema({
	title: { type: String, required: true },
	author: { type: String, required: true },
	description: { type: String, required: true },
	genre: { type: String, required: true },
	publishedDate: { type: Date, required: true },
});

export { BookSchema };
