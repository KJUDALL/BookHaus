import mongoose, { Document } from "mongoose";
import { BookSchema } from "../schemas/BookSchema.js";

// this is the interface for the book which defines the fields and their types
interface IBook extends Document {
	title: string;
	author: string;
	description: string;
	genre: string;
	publishedDate: Date;
}

export default mongoose.model<IBook>("Book", BookSchema);
