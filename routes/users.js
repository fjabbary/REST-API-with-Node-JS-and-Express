import express from 'express';
const router = express.Router();

import { getUsers, addUser, getOneUser, deleteUser, updateUser } from '../controllers/users.js';



router.get('/', getUsers)

router.post('/', addUser)

router.get('/:id', getOneUser)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)

export default router;