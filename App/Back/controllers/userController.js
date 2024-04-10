
import User from "../models/userModel.js";

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({message: "Cannot access the database"});
    }
}

export const loginUser = async (req,res) =>{

    const {email,pass} = req.body

    let Userexists
    try {
        Userexists = await User.findOne({email})   ; 
    } catch (error) {
        return console.log(error);
    }
    if(!Userexists){
        return res.status(404).json({message: "This email has not been registed yet"});
    }

    const booleanPassword = (pass === Userexists.pass)

    if(!booleanPassword){
        return res.status(404).json({message: "The password is incorrect "});
    }
    return res.status(200).json({message: "You have logged in successfully "});

}

export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveUser = async (req, res) => {
    const user = new User(req.body);
    try {
        const inserteduser = await user.save();
        res.status(201).json(inserteduser);
    } catch (error) {
        res.status(400).json({message: "error inputing values into the database "});
    }
}

export const updateUser = async (req, res) => {
    try {
        const updateduser = await User.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updateduser);
    } catch (error) {
        res.status(400).json({message: "Cannot update the user with those values"});
    }
}

export const deleteUser = async (req, res) => {
    try {
        const deleteduser = await User.deleteOne({_id:req.params.id});
        res.status(200).json(deleteduser);
    } catch (error) {
        res.status(400).json({message: "Failed to delete document make sure it exists "});
    }
}