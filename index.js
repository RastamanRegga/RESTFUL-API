import express from "express";
import dotenv from "dotenv";
import db from "./config/database.js";
import router from "./routes/index.js";
dotenv.config();
const app = express();

try {
    await db.authenticate();
    console.log('Database Connected....');
} catch (error) {
    console.error(error);
}

app.use(express.json());
app.use(router);

app.listen(5000, () => console.log('Server runing at port 5000'));