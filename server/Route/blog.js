const router = require("express").Router();
require("dotenv").config();
const { db } = require("../db.js");
const { verifyToken, verifyUser } = require("./middleware.js");
//Create Blog
router.post("/", verifyToken, (req, res) => {
  let q = "INSERT INTO Post (`title`, `content`,`user_id`) VALUES(?,?,?)";
  let value = [req.body.title, req.body.content, req.body.user_id];
  db.query(q, value, (err, data) => {
    if (err)
      return res.status(403).json({
        data: false,
      });
    res.status(201).json({
      data: true,
      message: "Created Blog",
    });
  });
});
//Update Blog
router.put("/:id", verifyUser, (req, res) => {
  let bookId = req.params.id;
  let q = "UPDATE Post set title=?,content=?,user_id=? WHERE id=?";
  let value = [req.body.title, req.body.content, req.body.user_id];
  db.query(q, [...value, bookId], (err, data) => {
    if (err)
      return res.status(403).json({
        data: false,
        message: err?.sqlMessage,
      });
    res.status(200).json({
      data: true,
      message: "Updated Blog",
    });
  });
});
//Delete Blog
router.delete("/:id", verifyUser, (req, res) => {
  let bookId = req.params.id;
  let q = "DELETE FROM Post WHERE id=?";
  db.query(q, [bookId], (err, data) => {
    if (err)
      return res.status(403).json({
        data: false,
        message: err?.sqlMessage,
      });
    res.status(200).json({
      data: true,
      message: "Deleted Blog",
    });
  });
});
//Get Blogs
router.get("/", (req, res) => {
  let q = "SELECT * FROM Post";
  db.query(q, (err, data) => {
    console.log(err);
    if (err)
      return res.status(403).json({
        data: false,
        message: err?.sqlMessage,
      });
    res.status(200).json(data);
  });
});
//Get Single Blog
router.get("/:id", (req, res) => {
  let bookId = req.params.id;
  let q = "SELECT * FROM Post  WHERE id=?";
  db.query(q, [bookId], (err, data) => {
    if (err) return res.status(err).json({ error: err?.sqlMessage });
    res.status(200).json(data);
  });
});

module.exports = router;
