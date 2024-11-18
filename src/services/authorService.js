import Author from "../models/authorModel.js";

const authorService = {
    async getAll() {
        const result = await Author.find({});
        return result;
    },

    async create(author) {
        const result = await Author.create(author);
        return result;
    },

    async update(_id, author) {
        const authorDetail = {
            name: author.name
        }
        const result = await Author.updateOne(_id, authorDetail, {new: true})
        return result;
    },

    async delete(_id) {
        const result = await Author.deleteOne(_id).exec();
        return result;
    }
}

export default authorService;