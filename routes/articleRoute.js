import express from "express"
import { createArticle, destroyArticle, indexArticle, showArticle, updateArticle } from '../controller/articleController.js';
import { authenticatedToken } from "../middleware/verifyToken.js";

const articleRoute = express.Router();

articleRoute.route('/').get(indexArticle).post(authenticatedToken, createArticle);
articleRoute.route('/:id').get(showArticle).put(authenticatedToken, updateArticle).delete(authenticatedToken, destroyArticle);

export default articleRoute;