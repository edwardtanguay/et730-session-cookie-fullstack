import express from 'express';

import {
	getSingleUser,
	getAllUsers,
	addSingleUser,
	updateSingleUser,
	deleteSingleUser,
	deleteAllUsers,
	loginUser,
} from '../controllers/userController.js';

export const userRouter = express.Router();

userRouter
	.route('/')
	.post(addSingleUser)
	.get(getAllUsers)
	.delete(deleteAllUsers);
userRouter
	.route('/:id')
	.get(getSingleUser)
	.patch(updateSingleUser)
	.delete(deleteSingleUser);
userRouter
	.route('/login')
	.post(loginUser)