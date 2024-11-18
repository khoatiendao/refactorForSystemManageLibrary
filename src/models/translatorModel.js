import mongoose from "mongoose";

const translatorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const Translator = mongoose.model('translator', translatorSchema)

export default Translator