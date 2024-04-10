import mongoose from "mongoose";

const recycleSchema = mongoose.Schema({
    Address: {
        type: String,
        required: [true, "Please fill in an address"]
    },
    lat: {
        type: Number,
        required: true
    },
    long: {
        type: Number,
        required: true
    },
    
    Opening_hours: {
        type: String,
        required: [true, "Please fill in opening hours"]
    },
    
    Closing_hours: {
        type: String,
        required: [true, "Please fill in closing hours"]
    },
    Type: {
        type: String,
        required: [true, "Please fill in type"]
    },
    info: {
        type: String,
        required: [true, "Please fill in info"]
    },

    
});

export default mongoose.model("recycle", recycleSchema);
