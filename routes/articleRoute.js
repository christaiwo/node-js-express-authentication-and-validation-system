import express from "express"
import { createArticle, destroyArticle, indexArticle, showArticle, updateArticle } from '../controller/articleController.js';
import { authenticatedToken } from "../middleware/verifyToken.js";
import { articleValidation } from "../validation/articleValidation.js";

const articleRoute = express.Router();

articleRoute.use(authenticatedToken);

articleRoute.route('/').get(indexArticle).post(articleValidation, createArticle);
articleRoute.route('/:id').get(showArticle).put(articleValidation, updateArticle).delete(destroyArticle);

export default articleRoute;