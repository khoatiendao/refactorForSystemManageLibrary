// import translator from "../models/translatorModel";
import Publisher from "../models/publisherModel.js";

const publisherService = {
    async getAll() {
        const result = await Publisher.find([]);
        return result;
    },

    async create(publisher) {
        const result = await Publisher.create(publisher);
        return result;
    },

    async update(_id, publisher) {
        const publisherDetail = {
            publisher: publisher.name
        }
        const result = await Publisher.updateOne(_id, publisherDetail, {new: true})
        return result;
    },

    async delete(_id) {
        const result = await Publisher.deleteOne(_id).exec();
        return result;
    },
}

export default publisherService;