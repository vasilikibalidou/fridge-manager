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

router.use("/", editRoutes);
router.use("/", itemRoutes);
router.use("/", fridgeRoutes);
router.use("/", profileRoutes);
router.use("/auth", usersRoutes);

module.exports = router;
