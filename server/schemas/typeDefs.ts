const typeDefs = `
type Post {
    id: ID!
    user: ID!
    title: String!
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