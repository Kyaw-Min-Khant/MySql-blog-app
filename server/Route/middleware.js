const jwt = require("jsonwebtoken");
//Check Token
const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWTSEC, (err, user) => {
      if (err)
        return res.status(403).json({
          data: false,
          message: "Invalid Token",
        });
      req.user = user;
      next();
    });
  } else {
    res.status(403).json({
      data: false,
      message: "You have no access to this",
    });
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
