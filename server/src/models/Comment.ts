import mongoose, { Document } from 'mongoose';
import { CommentSchema } from '../schemas/CommentSchema.js';

interface IComment extends Document {
    content: string;
    user: mongoose.Types.ObjectId;
    post: mongoose.Types.ObjectId;
    createdAt: Date;
}

export default mongoose.model<IComment>('Comment', CommentSchema);