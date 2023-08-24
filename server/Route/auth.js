const router = require("express").Router();
require("dotenv").config();
const { db } = require("../db.js");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const { verifyToken } = require("./middleware.js");
//Register
router.post("/register", (req, res) => {
  let q = "INSERT INTO User  (`username`,`email`,`password`) VALUES(?,?,?)";
  let value = [
    req.body.username,
    req.body.email,
    CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_SECRET
    ).toString(),
  ];
  db.query(q, value, (err, data) => {
    if (err) {
      return res.status(403).json({ data: false, message: err?.sqlMessage });
    }
    res.status(201).json("Create Successful");
  });
});
//login
router.post("/login", (req, res) => {
  let q = "SELECT * FROM User WHERE email=?";
  db.query(q, [req.body.email], (err, data) => {
    const user = data[0];
    if (data.length === 0) {
      return res.status(403).json({ data: false, message: "User NotFound" });
    }
    //Check Password
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASSWORD_SECRET
    ).toString(CryptoJS.enc.Utf8);
    //AccessToken Generate
    let accessToken = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWTSEC,
      { expiresIn: "7d" }
    );
    hashedPassword !== req.body.password &&
      res.status(401).json({ data: false, message: "Login failed" });
    let userData = {
      id: user.id,
      username: user.username,
      email: user.email,
      accessToken,
    };
    res.status(200).json({ data: true, userData });
  });
});
//Logout
router.post("/logout", verifyToken, (req, res) => {
  res.status(200).json({ data: true });
});
module.exports = router;
