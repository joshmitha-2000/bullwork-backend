// routes/featureRoutes.js
const express = require('express');
const featureController = require('../controller/featurecontroller');

const router = express.Router();

// Get all features of a product
router.get("/product/:productId", featureController.getFeatures);

// Get one feature by ID
router.get("/:id", featureController.getFeature);

// Create new feature
router.post("/", featureController.createFeature);

// Update feature by ID
router.put("/:id", featureController.updateFeature);

// Delete feature by ID
router.delete("/:id", featureController.deleteFeature);

module.exports = router;
