import Genre from "../models/genreModel.js";

const genreService = {
    async getAll() {
        const result = await Genre.find([]);
        return result;
    },

    async findOneGenre(_id) {
        const result = await Genre.findOne(_id).exec();
        return result;
    },

    async create(genre) {
        const result = await Genre.create(genre);
        return result;
    },

    async update(_id, genre) {
        const genreDetail = {
            name: genre.name
        }
        const result = await Genre.updateOne(_id, genreDetail, {new: true})
        return result;
    },

    async delete(_id) {
        const result = await Genre.deleteOne(_id).exec();
        return result;
    }
}

export default genreService;