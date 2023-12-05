const successResponse = (status, msg, res) => {
  const responseMsg = msg || { data: "true", msg: "OK" };
  res.status(status).json(responseMsg);
};

const errorResponse = (status, msg, res) => {
  const responseMsg = msg || { data: "false", msg: "Something is wrong" };
  res.status(status).json(responseMsg);
};

module.exports = { successResponse, errorResponse };
