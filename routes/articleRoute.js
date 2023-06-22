import express from "express"
import { createArticle, destroyArticle, indexArticle, showArticle, updateArticle } from '../controller/articleController.js';

const articleRoute = express.Router();

articleRoute.route('/').get(indexArticle).post(createArticle);
articleRoute.route('/:id').get(showArticle).put(updateArticle).delete(destroyArticle);

export default articleRoute;