const Enquiry = require("../Model/enquiryModel");

exports.home = (req, res) => {
    res.send("Backend working")
}

exports.createEnquiry = async(req, res) => {
    try {
        //1. Collect information
        const { firstname, lastname, email, phonenumber, message } = req.body;
        console.log(req.body);

        //2. Validate info
        if (!firstname || !lastname || !email || !phonenumber || !message) {
            throw new Error(`Name , email, phonenumber and message is required`)
        }

        //3. Create a  entry in database
        const enquiry = await Enquiry.create({
            firstname,
            lastname,
            email,
            phonenumber,
            message
        });
        res.status(200).json({
            success: true,
            message: "Enquiry created",
            enquiry,
        })

    } catch (error) {

        res.status(400).json({
            success: false,
            message: "Enquiry not created",

        })
        console.log(error);
    }
}