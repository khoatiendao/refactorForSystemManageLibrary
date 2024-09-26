import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import dotenv from "dotenv";
import connMongoose from "./src/configs/database.js";
dotenv.config()
connMongoose();
const app = express();
const PORT = process.env.PORT || 9000;

app.use(morgan('combined')); // log ra server mỗi lần request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send("Hello World")
});

app.listen(PORT, () => console.log(`Example app listening port at http://localhost:${PORT}`)) // nghe với port 