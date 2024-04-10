import express from "express";
import {
    getRecycle,
    saveRecycle,
    updateRecycle,
    deleteRecycle,
    getRecycleById
} from "../controllers/recycleController.js"; // Import the corresponding controller functions

const router = express.Router();

router.get('/recycle', getRecycle); // Endpoint to get all recycles
router.get('/recycle/:id', getRecycleById); // Endpoint to get a recycle by ID
router.post('/recycle', saveRecycle); // Endpoint to save a new recycle
router.patch('/recycle/:id', updateRecycle); // Endpoint to update a recycle by ID
router.delete('/recycle/:id', deleteRecycle); // Endpoint to delete a recycle by ID

export default router;
