// import express from 'express';
import { Router } from "express";
import jwtToken from '../middlewares/auth/authJwt.js';
import { authorizeRole } from '../middlewares/auth/authRole.js';
import handleAsync from '../middlewares/handle/handleAsync.js';
import Author from '../controllers/authorController.js';

const routes = Router();

routes.post('/api/v1/author/create', Author.createAuthor);

routes.get('/getAuthor', Author.getAllAuthor)

export default routes;
