const jwt = require("jsonwebtoken");
const { errorResponse } = require("../req&res");
//Check Token
const verifyToken = async (req, res, next) => {
  try {
    const token =
      req.headers["authorization"] &&
      req.headers["authorization"].split(" ")[1];

    if (!token)
      return errorResponse(402, {
        data: "false",
        msg: "Invalid Token",
        res,
      });
    const verified = jwt.verify(token, process.env.JWTSEC);
    req.user = verified;
    next();
  } catch (error) {
    res.status(401).json({ data: false, message: "Unauthenticated token" });
    return;
  }
};
module.exports = { verifyToken };
