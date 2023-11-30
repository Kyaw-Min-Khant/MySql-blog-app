const express = require("express");
const app = express();

require("dotenv").config();
const cors = require("cors");
const auth = require("./Route/auth");
const blog = require("./Route/blog");
const { default: helmet } = require("helmet");
const morgan = require("morgan");
app.use(helmet());
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({ limit: "60mb", extended: true, parameterLimit: 1000000 })
);
app.use("/blog", blog);
app.use("/auth", auth);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is Running");
});
