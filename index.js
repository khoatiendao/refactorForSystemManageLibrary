import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';
import connMongoose from './src/configs/database.js';
import userRoutes from './src/routes/userRoutes.js';
import bookRoutes from './src/routes/bookRoutes.js'
import authorRoutes from './src/routes/authorRoutes.js'
import handleError from './src/middlewares/handle/handleError.js';
import Book from './src/models/bookModel.js';
import genre from './src/models/genreModel.js';
import author from './src/models/authorModel.js';
import Translator from './src/models/translatorModel.js';
import publisher from './src/models/publisherModel.js';
dotenv.config();
connMongoose();
const app = express();
const PORT = process.env.PORT || 9000;

app.use('trust proxy', true)
morgan.token('ip', (req) => (req.ip))
app.use(morgan(':ip - :method :url :status :response-time ms')); // log ra server mỗi lần request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () =>
  console.log(`Example app listening port at http://localhost:${PORT}`)
); // nghe với port

// Config CORS
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, OPTIONS, PATCH, DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type,auth-token-bearer'
  );
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('optionsSucessStatus', 200);
  next();
});

// API routes
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/book', bookRoutes)
app.use('/api/v1/author', authorRoutes)

// Handle Error
app.use(handleError);

