const express = require('express');
const router = express.Router();
const demoFormController = require('../controller/democontroller');

router.post('/', demoFormController.createDemoForm);
router.get('/', demoFormController.getAllDemoForms);
router.get('/:id', demoFormController.getDemoFormById);
router.delete('/:id', demoFormController.deleteDemoForm);

module.exports = router;
