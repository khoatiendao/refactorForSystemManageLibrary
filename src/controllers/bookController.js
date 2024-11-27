import bookService from '../services/BookService.js';
import authorService from '../services/authorService.js';
import translatorService from '../services/translatorService.js';
import genreService from '../services/genreService.js';
import publisherService from '../services/publisherService.js';

class Book {
  async searchTitle(req, res, next) {
    try {
      const title = req.query.title;
      const result = await bookService.searchTitle(title);
      return res.status(200).json({ message: 'Search Found', book: result });
    } catch (error) {
      next(error);
    }
  }

  async getBookDetail(req, res, next) {
    try {
      const _id = req.params._id;
      const result = await bookService.getBookDetail(_id);
      return res.status(200).json({ message: 'Search Found', book: result });
    } catch (error) {
      next(error);
    }
  }

  async createBook(req, res, next) {
    try {
      const {
        title,
        image,
        author,
        translator,
        genre,
        publisher,
        publisher_year,
        isbn_10,
        isbn_13,
        isAvailable,
      } = req.body;
      const findAuthor = await authorService.findOneAuthor(author);
      const findTranslator = await translatorService.findOneTranslator(
        translator
      );
      const findGenre = await genreService.findOneGenre(genre);
      const findPublisher = await publisherService.findOnePublisher(publisher);
      if (!findAuthor) {
        return res.status(404).json({ message: 'NOT FOUND' });
      } else if (!findTranslator) {
        return res.status(404).json({ message: 'NOT FOUND' });
      } else if (!findGenre) {
        return res.status(404).json({ message: 'NOT FOUND' });
      } else if (!findPublisher) {
        return res.status(404).json({ message: 'NOT FOUND' });
      }
      const book = {
        title: title,
        image: image,
        author: findAuthor,
        translator: findTranslator,
        genre: findGenre,
        publisher: findPublisher,
        publisher_year: publisher_year,
        isbn_10: isbn_10,
        isbn_13: isbn_13,
        isAvailable: isAvailable,
      };
      const result = await bookService.create(book);
      if (result) {
        res.status(200).json({ book: result });
      } else {
        res.status(400).json({ message: 'Error' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({message: 'INTERNAL SERVER ERROR'})
    }
  }
}

export default new Book();
