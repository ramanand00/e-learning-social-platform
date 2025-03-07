const express = require("express");
const router = express.Router();

// Sample route
router.get("/users", (req, res) => {
  res.json([{ id: 1, name: "John Doe" }, { id: 2, name: "Jane Doe" }]);
});

module.exports = router;
