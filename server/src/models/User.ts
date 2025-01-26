import mongoose, { Document } from "mongoose";
import { UserSchema } from "../schemas/UserSchema";

interface IUser extends Document {
	username: string;
	email: string;
	password: string;
	createdAt: Date;
}

export default mongoose.model<IUser>("User", UserSchema);
