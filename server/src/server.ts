import express from "express";
import mongoose from "mongoose";
import path from "path";

import { dirname } from "path";

const __dirname = dirname(__filename);

import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import protectedRoutes from "./routes/protected.js";
import bodyParser from "body-parser"; // Required for Apollo middleware
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware for JSON parsing and CORS
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost:27017/mydatabase"
);

// Apollo Server Setup
const server = new ApolloServer({
	typeDefs: `#graphql
    type Query {
      hello: String
    }
  `,
	resolvers: {
		Query: {
			hello: () => "Hello, world!",
		},
	},
});

// Start Apollo Server and integrate with Express
async function startServer() {
	await server.start();
	app.use("/graphql", expressMiddleware(server));

	// Routes
	app.use("/auth", authRoutes);
	app.use("/api", protectedRoutes);

	if (process.env.NODE_ENV === "production") {
		app.use(express.static(path.join(__dirname, "../Client/dist")));

		app.get("*", (_req, res) => {
			res.sendFile(path.join(__dirname, "../Client/dist/index.html"));
		});
	}

	// Start Express Server
	app.listen(PORT, () => {
		console.log(`Server is running on http://localhost:${PORT}`);
	});
}

startServer();
