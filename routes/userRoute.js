import { destroyUser, getAllUser, getUser, loginUser, registerUser, updateUser } from '../controller/userController.js';
import { authenticatedToken } from '../middleware/verifyToken.js';
import express from "express";
import {loginValidation, registerValidation, updateUserValidation} from '../validation/userValidation.js';

const userRoute = express.Router();

userRoute.use(['/','/:id'], authenticatedToken);

userRoute.route('/register').post(registerValidation, registerUser);
userRoute.route('/login').post(loginValidation, loginUser);

userRoute.route('/').get(getUser);
userRoute.route('/:id').put(updateUserValidation, updateUser).delete(destroyUser);

userRoute.route('/users/all').get(getAllUser);


export default userRoute;