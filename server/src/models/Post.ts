import mongoose, { Document } from "mongoose";
import { PostSchema } from "../schemas/PostSchema.js";

interface IPost extends Document {
	user: mongoose.Types.ObjectId;
	title: string;
	comment: mongoose.Types.ObjectId[];
	content: string;
	createdAt: Date;
}

export default mongoose.model<IPost>("Post", PostSchema);
