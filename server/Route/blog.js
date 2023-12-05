const router = require("express").Router();
require("dotenv").config();
const {
  createBlog,
  updateBlog,
  deleteBlog,
  getBlog,
  singleBlog,
} = require("../Controllers/blogController.js");
const { verifyToken } = require("./middleware.js");
//Create Blog
router.post("/", verifyToken, createBlog);
//Update Blog
router.put("/:id", verifyToken, updateBlog);
//Delete Blog
router.delete("/:id", verifyToken, deleteBlog);
//Get Blogs
router.get("/", getBlog);
//Get Single Blog
router.get("/:id", singleBlog);

module.exports = router;
