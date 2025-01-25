import mongoose, { Schema, Document } from 'mongoose'; 

// this is the interface for the book which defines the fields and their types
interface IBook extends Document {
  title: string;
  author: string;
  description: string;
  genre: string;
  publishedDate: Date;
}

const BookSchema: Schema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  genre: { type: String, required: true },
  publishedDate: { type: Date, required: true }
});

export default mongoose.model<IBook>('Book', BookSchema);