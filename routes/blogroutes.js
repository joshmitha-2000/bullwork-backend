const express = require('express');
const router = express.Router();
const blogController = require('../controller/blogcontroller');

router.post('/', blogController.createBlog);        // Create a new blog
router.get('/', blogController.getAllBlogs);        // Get all blogs
router.get('/:id', blogController.getBlogById);     // Get blog by ID
router.put('/:id', blogController.updateBlog);      // Update blog by ID
router.delete('/:id', blogController.deleteBlog);   // Delete blog by ID

module.exports = router;
