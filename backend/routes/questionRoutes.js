const express = require("express");
const { togglePinQuestion, updateQuestionNote, deleteQuestion, addQuestionsToSession } = require("../controllers/questionController");
const { protect } = require("../middlewares/authMiddleware");


const router = express.Router();

router.post("/add", protect, addQuestionsToSession);
router.post("/:id/pin", protect, togglePinQuestion);
router.put("/:id/note", protect, updateQuestionNote);

module.exports = router;
