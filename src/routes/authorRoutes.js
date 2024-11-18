import express from "express";
import jwtToken from "../middlewares/auth/authJwt.js";
import { authorizeRole } from "../middlewares/auth/authRole.js";
import handleAsync from "../middlewares/handle/handleAsync.js";
import { findAll } from "../controllers/authorController.js";

const routes = express.Router()

routes.get("/", jwtToken.checkTokenVerify, authorizeRole('user'), handleAsync(findAll))

export default routes;