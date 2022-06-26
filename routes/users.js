import express from 'express';


import { createUser, getAllUsers, getUser, deleteUser, updateUser } from '../controllers/users.js';
const router = express.Router();

//mock database

router.get('/', getAllUsers);

router.post('/', createUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;