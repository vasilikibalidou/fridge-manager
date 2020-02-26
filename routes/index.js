/* We'll centralize our routes imports to this file to keep our code clean */

const router = require("express").Router();
const usersRoutes = require("./users");
const profileRoutes = require("./profile");

router.get("/", (req, res) => {
  res.send("This is home");
});

router.use("/", profileRoutes);
router.use("/auth", usersRoutes);

module.exports = router;
