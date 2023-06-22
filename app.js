import express from "express";
import articleRouter from "./routes/article.js";
import { PrismaClient } from "@prisma/client";


const app = express();

const prisma = new PrismaClient();


app.use(express.json());
app.use(express.urlencoded());

app.use('/api/v1/article', articleRouter);


const port = 3000;
const startApp = async () => {
    try {
        await prisma.$connect;
        app.listen(port, console.log(`Server listening at port ${port}`));
    } catch (error) {
        console.log(error)
    }
}

startApp();