import express from "express";
import articleRoute from "./routes/articleRoute.js";
import { PrismaClient } from "@prisma/client";
import userRoute from "./routes/userRoute.js";

const app = express();

const prisma = new PrismaClient();


app.use(express.json());
app.use(express.urlencoded());

app.use('/api/v1/user', userRoute);
app.use('/api/v1/article', articleRoute);


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