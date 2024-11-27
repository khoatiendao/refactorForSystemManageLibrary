import authorService from "../services/authorService.js"

class Author {
    async createAuthor(req, res, next) {
        try {
            const result = await authorService.create();
            res.json(result);
        } catch (error) {
            next(error)
        }
    }

    async getAllAuthor(req, res, next) {
        try {
            const result = await authorService.getAll();
            res.json(result)
        } catch (error) {
            next(error)
        }
    }
}

export default new Author()
