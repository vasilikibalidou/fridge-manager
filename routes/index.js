/* We'll centralize our routes imports to this file to keep our code clean */

const router = require("express").Router();
const usersRoutes = require("./users");
const profileRoutes = require("./profile");
const fridgeRoutes = require("./fridges");
const itemRoutes = require("./foodItems");
const editRoutes = require("./editfooditems");
/*router.get("/", (req, res) => {
  res.send("This is home");
});*/

router.use("/api", editRoutes);
router.use("/api", itemRoutes);
router.use("/api", fridgeRoutes);
router.use("/api", profileRoutes);
router.use("/api/auth", usersRoutes);

module.exports = router;
