import bookService from '../services/BookService.js';


export const searchTitle = async(req, res) => {
    const title = req.query.title;
    const result = await bookService.searchTitle(title);
    return res.status(200).json({message: 'Search Found', book: result});
}

export const bookDetail = async(req, res) => {
    const _id = req.params._id;
    const result = await bookService.getBookDetail(_id);
    return res.status(200).json({message: 'Search Found', book: result});
}