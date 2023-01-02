const express = require("express");
const { home, createEnquiry } = require("../Controllers/enquiryControllers");
const router = express.Router();


router.get("/", (home));
router.post("/enquiry", (createEnquiry));

module.exports = router;