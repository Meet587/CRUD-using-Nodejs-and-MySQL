const express = require("express");
const {
  getbooks,
  postbooks,
  deleteBooks,
  updateBooks,
} = require("../controllers/books");
const router = express.Router();

// router.all("/").get(getbooks).post(postbooks);
// router.all("/:id").delete(deleteBooks);

router.get("/", getbooks);
router.post("/", postbooks);
router.delete("/:id", deleteBooks);
router.put("/:id", updateBooks);

module.exports = router;
