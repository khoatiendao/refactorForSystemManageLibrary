import express from "express";
import {userRegister} from '../controllers/userController.js'
import jwtToken from "../middlewares/auth/authJwt.js"
import {authorizeRole} from '../middlewares/auth/authRole.js'
import handleAsync from "../middlewares/handle/handleAsync.js";
const routes = express.Router();

routes.post('/register', handleAsync(userRegister));

export default routes;
