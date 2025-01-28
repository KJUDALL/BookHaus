import mongoose, { Document } from "mongoose";
import { UserSchema } from "../schemas/UserSchema";

interface IUser extends Document {
	username: string;
	email: string;
	password: string;
	createdAt: Date;
	comparePassword(candidatePassword: string): Promise<boolean>;
}
UserSchema.methods.comparePassword = async function (candidatePassword: string) {
	const user = this as IUser;
	return candidatePassword === user.password;
};

export default mongoose.model<IUser>("User", UserSchema);