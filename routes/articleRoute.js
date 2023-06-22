import express from "express"
import { createArticle, destroyArticle, indexArticle, showArticle, updateArticle } from '../controller/articleController.js';

const articleRouter = express.Router();

articleRouter.route('/').get(indexArticle).post(createArticle);
articleRouter.route('/:id').get(showArticle).put(updateArticle).delete(destroyArticle);

export default articleRouter;