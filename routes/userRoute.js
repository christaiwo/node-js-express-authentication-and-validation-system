import { destroyUser, getAllUser, getUser, loginUser, registerUser, updateUser } from '../controller/userController.js';
import { authenticatedToken } from '../middleware/verifyToken.js';

import express from "express";

const userRoute = express.Router();


userRoute.route('/register').post(registerUser);
userRoute.route('/login').post(loginUser);

userRoute.route('/').get(authenticatedToken, getUser);
userRoute.route('/:id').put(authenticatedToken, updateUser).delete(authenticatedToken, destroyUser);

userRoute.route('/users/all').get(getAllUser);


export default userRoute;