import mongoose, { Schema } from 'mongoose';

const PostSchema: Schema = new Schema({
    user: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    comment: [{ type: mongoose.Types.ObjectId, required: true }],
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

export { PostSchema };