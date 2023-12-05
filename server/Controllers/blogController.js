const { db } = require("../config/db");
const { errorResponse, successResponse } = require("../req&res");
const createBlog = (req, res) => {
  const user_id = req.user.id;
  const { title, content } = req.body;
  const q = "INSERT INTO Post (`title`,`content`,`user_id`) VALUES(?,?,?)";
  const value = [title, content, user_id];
  db.query(q, value, (err, data) => {
    if (err) return errorResponse(403, { data: false, msg: err }, res);
    successResponse(201, { data: true, msg: "Blog Create Successful" }, res);
  });
};
const updateBlog = (req, res) => {
  const userId = req.user.id;
  const bookId = req.params.id;
  const { title, content } = req.body;
  try {
    db.query("SELECT `user_id` FROM Post WHERE id=?", bookId, (err, data) => {
      if (err) {
        return errorResponse(
          400,
          {
            data: false,
            msg: "You have no permissions to Update",
          },
          res
        );
      }
      if (data.length === 0)
        errorResponse(401, { data: false, msg: "Blog not found!" }, res);
      if (data.length > 0 && data[0]?.user_id === userId) {
        const q = "UPDATE Post SET title=?, content=? WHERE id=?";
        const values = [title, content, bookId];
        db.query(q, values, (err, data) => {
          if (err) {
            return errorResponse(403, { data: false, msg: err }, res);
          }

          if (userId) {
            return successResponse(
              200,
              { data: true, msg: "Update Blog Successful" },
              res
            );
          } else {
            return errorResponse(
              403,
              { data: false, msg: "Failed Update Blog" },
              res
            );
          }
        });
      } else {
        return errorResponse(
          400,
          {
            data: false,
            msg: "You have no permissions to Update",
          },
          res
        );
      }
    });
  } catch (err) {
    return errorResponse(403, { data: false, msg: "Failed Update Blog" }, res);
  }
};
const deleteBlog = (req, res) => {
  const userId = req.user.id;
  const bookId = req.params.id;

  try {
    db.query("SELECT `user_id` FROM Post WHERE id=?", bookId, (err, data) => {
      if (err)
        return errorResponse(
          400,
          {
            data: false,
            msg: "You have no permissions to Delete",
          },
          res
        );
      if (data.length === 0)
        errorResponse(401, { data: false, msg: "Blog not found!" }, res);
      if (data.length > 0 && data[0]?.user_id === userId) {
        let q = "DELETE FROM Post WHERE id=?";
        db.query(q, [bookId], (err, data) => {
          if (err) {
            return errorResponse(403, { data: false, msg: err }, res);
          }
          return successResponse(
            200,
            {
              data: true,
              msg: "Delete Blog Successful",
            },
            res
          );
        });
      } else {
        return errorResponse(
          403,
          { data: false, msg: "You have no permissions to Delete" },
          res
        );
      }
    });
  } catch (e) {
    return errorResponse(403, { data: false, msg: "Failed Delete Blog" }, res);
  }
};
const getBlog = (req, res) => {
  const q = "SELECT * FROM Post";
  db.query(q, (err, data) => {
    if (err) {
      return errorResponse(403, { data: false, msg: err }, res);
    }
    successResponse(200, { data: true, data }, res);
  });
};
const singleBlog = (req, res) => {
  const bookId = req?.params.id;
  console.log(bookId);
  const q = "SELECT * FROM Post WHERE id=?";
  db.query(q, [bookId], (err, data) => {
    if (err) {
      return errorResponse(403, { data: false, msg: err }, res);
    }
    successResponse(200, { data: true, data }, res);
  });
};
module.exports = { createBlog, updateBlog, deleteBlog, getBlog, singleBlog };
