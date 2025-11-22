const express = require("express");
const router = express.Router();
const { signupPatient } = require("../controllers/patientController");
const upload = require("../middleware/upload");

router.post("/signup", upload.single("image"), signupPatient);

module.exports = router;
