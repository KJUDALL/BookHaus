// This file contains the GraphQL schema definition for the Post, User, and Comment types, as well as the Query and Mutation types.
const typeDefs = `
type Post {
    id: ID!
    user: ID!
    title: String!
    content: String!
}

type User {
    id: ID!
    username: String!
    email: String!
}

type Comment {
    id: ID!
    user: ID!
    post: ID!
    content: String!
}

    
type Query {
    posts: [Post]
    post(id: ID!): Post
}
    
type Mutation {
    createPost(user: ID!, title: String!, content: String!): Post
    updatePost(id: ID!, title: String!, content: String!): Post
    deletePost(id: ID!): Boolean
}
`;

export default typeDefs;