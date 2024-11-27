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
  },

  async create(book) {
    const result = await Book.create(book);
    return result;
  },

  async update(_id, book) {
    const bookDetail = {
      title: book.title,
      author_id: book.author_id,
      translator_id: book.translator_id,
      genre_id: book.genre_id,
      publisher_id: book.publisher_id,
      publisher_year: book.publisher_year,
      isbn_10: book.isbn_10,
      isbn_13: book.isbn_13,
      isAvailable: book.isAvailable
    }
    const result = await Book.updateOne(_id, bookDetail, {new: true});
    return result;
  },

  async delete(_id) {
    const result = await Book.deleteOne(_id).exec();
    return result;
  }
};



export default bookService;
