import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const Author = mongoose.model('author', authorSchema)

export default Author