const express = require("express");
const router = express.Router();
const { createProperty, getMyProperties, updateProperty, deleteProperty } = require("../controllers/propertyController");
const { verifyToken } = require("../middleware/authMiddleware");

router.post("/", verifyToken, createProperty);
router.get("/my", verifyToken, getMyProperties);
router.put("/:id", verifyToken, updateProperty);
router.delete("/:id", verifyToken, deleteProperty);

module.exports = router;