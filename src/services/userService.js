import User from "../models/userModel.js";

const userService = {
    async findEmailUser(email) {
        const result = await User.findOne({email})
        return result;
    },

    async createUser(user) {
        const result = await User.create(user);
        return result;
    },

    async updateInfo(user, _id) {
        const userInfo = {
            fullName: user.fullName,
            phone: user.phone,
            address: user.address,
            ward: user.ward,
            district: user.district,
            city: user.city
        }
        const result = await User.updateOne(_id, userInfo, {new: true});
        return result;
    },

    async deActiveUser(_id, user) {
        const userInfo = {
            verify: user.verify
        }
        const result = User.updateOne(_id, userInfo, {new: true})
        return result;
    }
}

export default userService;