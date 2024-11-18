import Translator from "../models/translatorModel.js";

const translatorService = {
    async getAll() {
        const result = await Translator.find([]);
        return result;
    },

    async create(translator) {
        const result = await Translator.create(translator);
        return result;
    },

    async update(translator, _id) {
        const translatorDetail = {
            name: translator.name
        }
        const result = await Translator.updateOne(_id, translatorDetail, {new: true})
        return result;
    },

    async delete(_id) {
        const result = await Translator.deleteOne(_id).exec();
        return result;
    }
}

export default translatorService;