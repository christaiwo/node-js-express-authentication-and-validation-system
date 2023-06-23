import { destroyUser, getAllUser, getUser, loginUser, registerUser, updateUser } from '../controller/userController';

const express = require('express');

const userRoute = express.Router();


userRoute.route('/register').post(registerUser);
userRoute.route('/login').post(loginUser);

userRoute.route('/').get(getUser);
userRoute.route('/:id').put(updateUser).delete(destroyUser);

userRoute.route('/users/all').get(getAllUser);


export default userRoute;