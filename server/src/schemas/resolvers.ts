import  Post  from "../models/Post"; 
import mongoose, { Document } from "mongoose";

// Define the PostDocument interface
interface PostDocument extends Document {
    user: mongoose.Types.ObjectId;
    title: string;
    content: string;
}
// Define the arguments for the post query which is used to return a single post by ID
interface QueryArgs {
    id: string;
}
// Define the arguments for the createPost mutation 
interface MutationCreatePostArgs {
    user: string;
    title: string;
    content: string;
}
// Define the arguments for the updatePost mutation
interface MutationUpdatePostArgs {
    id: string;
    title: string;
    content: string;
}
// Define the arguments for the deletePost mutation
interface MutationDeletePostArgs { 
    id: string; 
} 

export const resolvers = {
    Query: {
        posts: async (): Promise<PostDocument[]> => await Post.find(),  // Return all posts
        post: async (_: any, { id }: QueryArgs): Promise<PostDocument | null> => await Post.findById(id), // Return a single post by ID
    },

    Mutation: {
        createPost: async (_: any, { user, title, content }: MutationCreatePostArgs): Promise<PostDocument> => {
            return await Post.create({ user, title, content }); // Create a new post
        },
        updatePost: async (_: any, { id, title, content }: MutationUpdatePostArgs): Promise<PostDocument | null> => {
            return await Post.findByIdAndUpdate(id, { title, content }, { new: true }); // Update a post by ID
        },
        deletePost: async (_: any, { id }: MutationDeletePostArgs): Promise<boolean> => {
            const result = await Post.findByIdAndDelete(id); // Delete a post by ID
            return result !== null;
        },
    },
};

export default resolvers;