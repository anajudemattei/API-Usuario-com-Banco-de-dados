const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router.get("/", postController.getAllposts);
router.get("/:id", postController.getpost);
router.post("/", postController.createpost);
router.delete("/:id", postController.deletepost);
router.put("/:id", postController.updatepost);

module.exports = router;
