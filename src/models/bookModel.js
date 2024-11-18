import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    author_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'author',
        required: true,
    },
    translator_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'translator',
        required: true,
    },
    genre_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'genre',
        required: true,
    },
    publisher_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'publisher',
        required: true,
    },
    publisher_year: {
        type: Date,
        required: true
    },
    isbn_10: {
        type: String,
        required: true
    },
    isbn_13: {
        type: String,
        required: true
    },
    isAvailable: {
        type: Boolean,
        required: true
    }
}, {
    versionKey: false,
    timestamps: false
})

const Book = mongoose.model('book', bookSchema);

export default Book;