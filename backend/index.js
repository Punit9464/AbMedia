import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import connectDb from './utils/connectDb.js';
import { initData } from './utils/dataInitializer.js';
import packagesModel from './models/packages.js';
import destinationsModel from './models/destinations.js';
import morgan from 'morgan';

const app = express();
const PORT = process.env.PORT;
const clientUrl = 'http://localhost:5173'

app.use(cors({
    origin: clientUrl
}));

app.use(morgan("dev"));

connectDb().then(() => {
    console.log("Database successfully Connected");
    initData();
}).catch((e) => {
    console.error("Error while connecting to Database");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/api/packages/top-selling', async(req, res) => {
    try{
        const packages = await packagesModel.find({ popular: true });
        return res.status(200).json({ packages });
    } catch(e) {
        return res.status(500).json({ message: 'Server Error: Could not fetch the packages '});
    }
});

app.get('/api/destinations', async(req, res) => {
    try{
        const destinations = await destinationsModel.find({ });
        return res.status(200).json({ destinations });
    } catch(e) {
        return res.status(500).json({ message: "Server Error: Coudln't fetch destinations "});
    }
});

app.listen(PORT, () => {
    console.log("Server is Listening to the PORT:", PORT);
});