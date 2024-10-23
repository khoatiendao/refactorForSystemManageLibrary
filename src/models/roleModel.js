import mongoose from "mongoose";

const roleSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    role: {
        enum: ['user', 'admin'],
        required: true
    }
})

const role = mongoose.model('role', roleSchema)

export default role;