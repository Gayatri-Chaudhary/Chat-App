import mongoose from "mongoose";


// make schema
const userSchema = new mongoose.Schema({
    email: {type: String, required: true, unique:true},
    fullName: {type: String, required: true},
    password: {type: String, required: true, minlength: 6},
    profilePic: {type: String, default: ""},
    bio: {type: String},
}, {timestamps: true});

// make model
const User = mongoose.model("User", userSchema);

export default User;

