const { db } = require("../config/db");
const { errorResponse, successResponse } = require("../req&res");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const register = (req, res) => {
  const { username, email, password } = req.body;

  if (!username && !email && !password)
    return errorResponse(
      400,
      { data: false, msg: "All Fields are required!" },
      res
    );

  try {
    let q = "INSERT INTO User (`username`,`email`,`password`) VALUES (?,?,?)";
    let value = [
      username,
      email,
      CryptoJS.AES.encrypt(password, process.env.PASSWORD_SECRET).toString(),
    ];
    db.query(q, value, (err, data) => {
      if (err) {
        return errorResponse(400, { data: false, msg: err }, res);
      }
      successResponse(200, { data: true, msg: "Register Successful" }, res);
    });
  } catch (e) {
    errorResponse(401, { data: false, msg: e }, res);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email && !password) {
    errorResponse(400, { data: false, msg: "All Fields Are required" }, res);
  }
  try {
    let q = "SELECT * FROM User WHERE email=?";
    db.query(q, [email], (err, data) => {
      if (data.lenght === 0) {
        return errorResponse(403, { data: false, msg: "User not Found", res });
      }
      const user = data[0];
      const hashedPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.PASSWORD_SECRET
      ).toString(CryptoJS.enc.Utf8);
      //AccessToken Generate
      let accessToken = jwt.sign({ id: user.id }, process.env.JWTSEC, {
        expiresIn: "30d",
      });
      hashedPassword !== password &&
        errorResponse(200, { data: false, msg: "Invalid password" }, res);
      let userData = {
        email: user.email,
        accessToken,
      };
      return successResponse(200, { data: true, userData }, res);
    });
  } catch (err) {
    errorResponse(401, { data: false, msg: "Login Failed" }, res);
  }
};
const logout = (req, res) => {
  return successResponse(200, { data: true, msg: "Logout SuccessFul!" }, res);
};
module.exports = { register, login, logout };
