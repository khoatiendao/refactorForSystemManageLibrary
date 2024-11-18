import express from "express";
import jwtToken from "../middlewares/auth/authJwt.js";
import { authorizeRole } from "../middlewares/auth/authRole.js";
import handleAsync from "../middlewares/handle/handleAsync.js";
import { bookDetail, searchTitle } from "../controllers/bookController.js";

const routes = express.Router()

routes.get('/search', searchTitle)

routes.get('/:_id', bookDetail)

export default routes;