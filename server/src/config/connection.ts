import mongoose from "mongoose";
import dotenv from "dotenv";

// Load .env
dotenv.config();

const connectionString =
	process.env.MONGODB_URI ||
	"mongodb+srv://kenziej:NtCXg44iXTedYvbX@librarycluster.sjuie.mongodb.net/?retryWrites=true&w=majority&appName=libraryCluster";

// Connect to DB
export const connectToDatabase = async () => {
	try {
		await mongoose.connect(connectionString);
		console.log("Sucessfully connected to MongoDB!");
	} catch (err) {
		console.log("Error connecting to MongoDB:", err);
		process.exit(1);
	}
};
