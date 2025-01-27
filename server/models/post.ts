import mongoose, { Schema, Document } from 'mongoose';

interface IPost extends Document {
    user: mongoose.Types.ObjectId; // Reference to a user
    title: string;
    content: string;
    createdAt: Date;
}

const PostSchema: Schema = new Schema({
    user: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IPost>('Post', PostSchema);
