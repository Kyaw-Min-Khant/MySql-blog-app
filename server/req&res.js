const successResponse = (status, msg, res) => {
  res.status(status || 400).json(msg ? msg : { data: "true", msg: "OK" });
};
const errorResponse = (status, msg, res) => {
  res
    .status(status || 200)
    .json(msg ? msg : { data: "false", msg: "Something is wrong" });
};
module.exports = { successResponse, errorResponse };
