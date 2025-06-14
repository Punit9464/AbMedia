import destinations from "../models/destinations.js";
import packages from "../models/packages.js";

import destinationsData from '../data/destinations.js';
import packagesData from '../data/packages.js';

async function initData() {
    try {
        await packages.deleteMany({});
        await destinations.deleteMany({});

        await destinations.insertMany(destinationsData);
        await packages.insertMany(packagesData);

        console.log("Data has been Initialized");
    } catch (e) {
        console.log("Error while initializing the Database with Mock Data: ");
        console.log(e['message']);
    }
}

export { initData };