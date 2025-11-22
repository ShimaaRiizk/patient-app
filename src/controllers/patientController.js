const Patient = require("../models/patientModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "yourSecretKey";

// ---------- SIGN UP ----------
exports.signupPatient = async (req, res) => {
  try {
    const {
      fullName,
      username,
      email,
      password,
      phone,
      cancerType,
      diagnosis,
      notes,
      abnormalSymptoms,
      additionalInfo,
      age,
      gender
    } = req.body;

    // Check for existing user
    const existingPatient = await Patient.findOne({ $or: [{ email }, { username }] });
    if (existingPatient) {
      return res.status(400).json({ message: "Email or username already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Get Cloudinary image URL (if file uploaded)
    let imageUrl = "";
    if (req.file) {
      imageUrl = req.file.path;  // multer + cloudinary stores URL here
    }

    // Create patient
    const patient = await Patient.create({
      fullName,
      username,
      email,
      password: hashedPassword,
      phone,
      cancerType,
      diagnosis,
      notes,
      abnormalSymptoms,
      additionalInfo,
      age,
      gender,
      image: imageUrl
    });

    // Generate JWT
    const token = jwt.sign({ id: patient._id }, JWT_SECRET, { expiresIn: "1h" });

    res.status(201).json({
      message: "Patient registered successfully",
      token,
      patient
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
