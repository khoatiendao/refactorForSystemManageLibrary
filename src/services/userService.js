import User from "../models/userModel.js";

const userService = {
    async findEmailUser(email) {
        const result = await User.findOne({email})
        return result;
    },

    async createUser(user) {
        const result = await User.create(user);
        return result;
    }
}

export default userService;