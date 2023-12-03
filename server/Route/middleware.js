const jwt = require("jsonwebtoken");
const { errorResponse } = require("../req&res");
//Check Token
const verifyToken = async (req, res, next) => {
  // const authHeader = req.headers["authorization"];
  // if (authHeader) {
  //   const token = authHeader.split(" ")[1];
  //   jwt.verify(token, process.env.JWTSEC, (err, user) => {
  //     if (err)
  //       return res.status(403).json({
  //         data: false,
  //         message: "Invalid Token",
  //       });
  //     console.log(user);
  //     req.user = user;
  //     next();
  //   });
  // } else {
  //   res.status(403).json({
  //     data: false,
  //     message: "You have no access to this",
  //   });
  // }
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
//Check User's Token
const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id == req.query.user_id) {
      next();
    } else {
      res.status(403).json({
        data: false,
        message: "You have no access to this",
      });
    }
  });
};
module.exports = { verifyToken, verifyUser };
