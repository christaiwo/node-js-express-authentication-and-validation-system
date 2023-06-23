import { destroyUser, getAllUser, getUser, loginUser, registerUser, updateUser } from '../controller/userController.js';
import { authenticatedToken } from '../middleware/verifyToken.js';

import express from "express";

const userRoute = express.Router();

userRoute.use(['/','/:id'], authenticatedToken);

userRoute.route('/register').post(registerUser);
userRoute.route('/login').post(loginUser);

userRoute.route('/').get(getUser);
userRoute.route('/:id').put(updateUser).delete(destroyUser);

userRoute.route('/users/all').get(getAllUser);


export default userRoute;