import express from 'express';
import {getUsers,createUser,getUserByFirstName,getUsersByAge} from '../Controllers/usersController.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.get('/:firstName', getUserByFirstName);
router.get('/age/:age', getUsersByAge);

export default router;
