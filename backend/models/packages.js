import { Schema, model } from 'mongoose';

const packageSchema = new Schema({
    topic: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 1000
    },
    itinerary: {
        type: [String],
        default: []
    },
    duration: {
        type: String,
        default: ''
    },
    popular: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: String,
        default: Date.now
    }
})

export default model("packages", packageSchema);