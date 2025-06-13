import 'dotenv/config';

import express from 'express';
import connectDb from './utils/connectDb.js';

const app = express();
const PORT = process.env.PORT;

connectDb().then(() => {
    console.log("Database successfully Connected");
}).catch((e) => {
    console.error("Error while connecting to Database");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log("Server is Listening to the PORT:", PORT);
});