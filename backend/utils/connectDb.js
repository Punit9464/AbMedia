import mongoose from "mongoose";

async function connectDb() {
    await mongoose.connect(process.env.MONGO_URI);

    mongoose.connection.on("error", (e) => {
        console.error("Mongoose Error: " + "\n", e);
    });
}

export default connectDb;