// import express from "express";
import { Router } from "express";
// import User from '../controllers/userController.js'
import jwtToken from "../middlewares/auth/authJwt.js"
import {authorizeRole} from '../middlewares/auth/authRole.js'
import handleAsync from "../middlewares/handle/handleAsync.js";
import User from "../controllers/userController.js"
const routes = Router();

routes.post('/register', User.userRegister);

routes.post('/login', User.userLogin);

export default routes;
