
import recycle from "../models/recycleModel.js";

export const getRecycle = async (req, res) => {
    try {
        const recycleLocations = await recycle.find();
        res.json(recycleLocations);
    } catch (error) {
        res.status(500).json({message: "Cannot access the database"});
    }
}

export const getRecycleById = async (req, res) => {
    try {
        const recycleLocation = await recycle.findById(req.params.id);
        res.json(recycleLocation);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveRecycle = async (req, res) => {
    const recycleLocation = new recycle(req.body);
    try {
        const insertedRecycleLocation = await recycleLocation.save();
        res.status(201).json(insertedRecycleLocation);
    } catch (error) {
        res.status(400).json({message: "Error inserting values into the database "});
    }
}

export const updateRecycle = async (req, res) => {
    try {
        const updatedRecycle = await recycle.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedRecycle);
    } catch (error) {
        res.status(400).json({message: "Cannot update the recycle location with those values"});
    }
}

export const deleteRecycle = async (req, res) => {
    try {
        const deletedRecycleLocation = await recycle.deleteOne({_id:req.params.id});
        res.status(200).json(deletedRecycleLocation);
    } catch (error) {
        res.status(400).json({message: "Failed to delete document, make sure it exists "});
    }
}
