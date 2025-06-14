import { Schema, model } from 'mongoose';

const destinationSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    duration: {
        type: String,
        required: true,
        default: ''
    },
    groupSize: {
        type: String,
        required: false,
        default: ''
    },
    tags: {
        type: [String],
        default: []
    },
}, {
    timestamps: true
});

export default model("destinations", destinationSchema);