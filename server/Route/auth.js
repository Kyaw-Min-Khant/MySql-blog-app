const router = require("express").Router();
require("dotenv").config();
const { db } = require("../config/db.js");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const { verifyToken } = require("./middleware.js");
const { register, login, logout } = require("../Controllers/authController.js");
//Register
router.post("/register", register);
//login
router.post("/login", login);
//Logout
router.post("/logout", verifyToken, logout);

module.exports = router;
