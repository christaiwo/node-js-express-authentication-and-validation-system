const { create, index } = require('../controller/article');

const express = require('express');

const articleRouter = express.Router();


articleRouter.route('/').get(index).post(create);


module.exports = articleRouter;