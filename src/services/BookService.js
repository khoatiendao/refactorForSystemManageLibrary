import Book from '../models/bookModel.js';

const bookService = {
  async getAll() {
    const result = await Book.find({})
      .populate('author_id')
      .populate('translator_id')
      .populate('genre_id')
      .populate('publisher_id');
    return result;
  },

  async searchTitle(searchQuery) {
    const result = await Book.find({
      title: { $regex: searchQuery, $options: 'i' },
    })
      .populate('author_id')
      .populate('translator_id')
      .populate('genre_id')
      .populate('publisher_id');
    return result;
  },

  async getBookDetail(_id) {
    const result = await Book.findById(_id).populate('author_id')
    .populate('translator_id')
    .populate('genre_id')
    .populate('publisher_id').exec();
    if(!result) throw new e
    return result;
  }
};



export default bookService;
