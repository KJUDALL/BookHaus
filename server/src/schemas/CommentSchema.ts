import mongoose, { Schema } from 'mongoose';

const CommentSchema: Schema = new Schema({
    content: { type: String, required: true },
    user: { type: mongoose.Types.ObjectId, required: true },
    post: { type: mongoose.Types.ObjectId, required: true },
    createdAt: { type: Date, default: Date.now },
});

export { CommentSchema };