import mongoose from "mongoose";

const publisherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const Publisher = mongoose.model('publisher', publisherSchema)

export default Publisher