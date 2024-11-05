import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import dotenv from "dotenv";
import connMongoose from "./src/configs/database.js";
import userRoutes from "./src/routes/userRoutes.js"
dotenv.config()
connMongoose();
const app = express();
const PORT = process.env.PORT || 9000;

app.use(morgan('combined')); // log ra server mỗi lần request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(PORT, () => console.log(`Example app listening port at http://localhost:${PORT}`)) // nghe với port

// Config CORS
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Methods","GET, POST, PUT, OPTIONS, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type,auth-token-bearer");
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("optionsSucessStatus", 200)
    next()
});

// API routes
app.use("/api/v1/user", userRoutes);
