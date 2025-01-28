import mongoose, { Document } from "mongoose";
import { UserSchema } from "../schemas/UserSchema";
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
  });
interface IUser extends Document {
	username: string;
	email: string;
	password: string;
	createdAt: Date;
}

userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) return next();
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
	next();
  });
  
  userSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
	return bcrypt.compare(password, this.password);
  };


export default mongoose.model<IUser>("User", UserSchema);
