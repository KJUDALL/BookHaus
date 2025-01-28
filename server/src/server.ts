import express from 'express';
import mongoose from 'mongoose';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';
import protectedRoutes from './routes/protected';
import bodyParser from 'body-parser'; // Required for Apollo middleware
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware for JSON parsing and CORS
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Apollo Server Setup
const server = new ApolloServer({
  typeDefs: `#graphql
    type Query {
      hello: String
    }
  `,
  resolvers: {
    Query: {
      hello: () => 'Hello, world!',
    },
  },
});

// Start Apollo Server and integrate with Express
await server.start();
app.use('/graphql', expressMiddleware(server));

// Routes
app.use('/auth', authRoutes);
app.use('/api', protectedRoutes);

// Start Express Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
