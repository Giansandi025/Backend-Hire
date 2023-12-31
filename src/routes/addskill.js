const express = require(`express`);
const router = express.Router();
const { protect } = require("../middleware/auth");
const upload = require("../middleware/upload");
const addSkillController = require("../controller/addskill");

router.post("/add", protect, addSkillController.addSkillController.Insert);
router.delete(
  "/delete/:id",
  protect,
  addSkillController.addSkillController.Delete
);
router.get("/get", protect, addSkillController.addSkillController.Get);
router.get("/:id", protect, addSkillController.addSkillController.GetByParams);

module.exports = router;
