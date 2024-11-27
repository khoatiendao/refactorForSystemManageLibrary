// import express from "express";
import { Router } from "express";
import jwtToken from "../middlewares/auth/authJwt.js";
import { authorizeRole } from "../middlewares/auth/authRole.js";
import handleAsync from "../middlewares/handle/handleAsync.js";
import Book from "../controllers/bookController.js"

const routes = Router()

routes.post('/create', Book.createBook)

routes.get('/search', Book.searchTitle)

routes.get('/:_id', Book.getBookDetail)


export default routes;