//Schema created
const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema({
    firstname: {
        type: String,
        require: [true, 'Firstname is required'],
        trim: true,
    },
    lastname: {
        type: String,
        require: [true, 'Lastname is required'],
        trim: true,
    },
    email: {
        type: String,
        unique: true,

    },
    phonenumber: {
        type: Number,
        require: [true, 'Phonenumber is required'],
        trim: true,
    },
    message: {
        type: String,

    }
});

module.exports = mongoose.model("Enquiry", enquirySchema)