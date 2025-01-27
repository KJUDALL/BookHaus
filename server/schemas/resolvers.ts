import  Post  from '../models/post';

export const resolvers = {
    Query: {
        posts: async () => await Post.find(),
        post: async (_, { id }) => await Post.findById(id),
    },

    Mutation: {
        createPost: async (__, { user, title, content }) => {
            const post = new Post({ user, title, content });
            await post.save();
            return post;
        },
        updatePost: async (_, { id, title, content }) => {
            return await Post.findByIdAndUpdate(id, { title, content }, { new: true });
        },
        deletePost: async (_: any, { id }: any) => {
            const result = await Post.findByIdAndDelete(id);
            return result !== null;
        },
    },
    };

    export default resolvers;