import { Schema, model } from 'mongoose';

const destinationSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true 
    },
    imageUrl: {
        type: String,
        required: true,
    },
    createdAt: {
        type: String,
        required: true
    }
});

export default model("destinations", destinationSchema);