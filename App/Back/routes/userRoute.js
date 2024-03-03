import express from "express";
import {
    getUsers,
    getUserById,
    saveUser,
    updateUser,
    deleteUser,
    loginUser
} from "../controllers/userController.js"; // Ensure correct file extension

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', saveUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
router.post('/login', loginUser);

export default router;
