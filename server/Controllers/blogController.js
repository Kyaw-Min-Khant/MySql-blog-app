const { db } = require("../config/db");
const { errorResponse, successResponse } = require("../req&res");
const createBlog = (req, res) => {
  const { title, content, user_id } = req.body;
  const q = "INSERT INTO Post (`title`,`content`,`user_id) VALUES(?,?,?)";
  const value = [title, content, user_id];
  db.query(q, value, (err, data) => {
    if (err) return errorResponse(403, { data: false, msg: err }, res);
    successResponse(201, { data: true, msg: "Blog Create Successful" }, res);
  });
};
const updatBlog = (req, res) => {
  const { title, content, bookId } = req.body;
  const q = "Update Post set title=?,content=? Where id=?";
  const value = [title, content];
  db.query(q, [...value, bookId], (err, data) => {
    if (err) {
      return errorResponse(403, { data: false, msg: err, res });
    }
    successResponse(200, { data: true, msg: "Update Blog Successful", res });
  });
};
const deleteBlog = (req, res) => {
  const { bookId } = req.body;
  let q = "DELETE FROM Post WHERE id=?";
  db.query(q, [bookId], (err, data) => {
    if (err) {
      return errorResponse(403, { data: false, msg: err, res });
    }
    successResponse(200, { data: true, msg: "Delete Blog Successful", res });
  });
};
const getBlog = (req, res) => {
  const q = "SELECT * FROM Post";
  db.query(q, (err, data) => {
    if (err) {
      return errorResponse(403, { data: false, msg: err, res });
    }
    successResponse(200, { data: true, data, res });
  });
};
const singleBlog = (req, res) => {
  const { bookId } = req.body;
  const q = "SELECT * FROM Post WHERE id=?";
  db.query(q, [bookId], (err, data) => {
    if (err) {
      return errorResponse(403, { data: false, msg: err, res });
    }
    successResponse(200, { data: true, data, res });
  });
};
module.exports = { createBlog, updatBlog, deleteBlog, getBlog, singleBlog };
