import authorService from "../services/authorService.js"

export const findAll = async(req, res) => {
    const result = await authorService.getAll();
    res.json(result);
}