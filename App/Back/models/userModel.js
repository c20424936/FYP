import mongoose from "mongoose";

//Creates the user scheama for the database
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please fill in a name"] //validate that they have entered a value 
    },
    email: {
        type: String,
        required: [true, "Please fill in a email"] ,//validate that they have entered a value
        unique: true,
        trim: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, //This line will validate that the email is not fake 
            "Please enter a valid email"
        ]
    },
    gender: {
        type: String,
        required: [true, "Select a gender "], //validate that they have entered a value 
        //minlength: [6, "Password is too short needs 6 carachters"],
        //maxlength: [30, "Password is too long needs to be less then 30 carachters"],
    },
    pass: {
        type: String,
        required: [true, "Select a password "], //validate that they have entered a value 
        minlength: [6, "Password is too short needs 6 carachters"],
        //maxlength: [30, "Password is too long needs to be less then 30 carachters"],
    },
  

}, {
    timestamps: true
});


//export the scheama
export default  mongoose.model("User", userSchema)