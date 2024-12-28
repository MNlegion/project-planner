const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Projects fetched successfully!" });
});

router.post("/", (req, res) => {
  res.status(200).json({ message: "Project created successfully!" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ message: `Project ${req.params.id} updated successfully!` });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `Project ${req.params.id} deleted successfully!` });
});

module.exports = router;
