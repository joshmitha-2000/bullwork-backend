const demoFormService = require('../services/demoservice');

exports.createDemoForm = async (req, res) => {
  try {
    const data = req.body;
    const result = await demoFormService.createDemoForm(data);
    res.status(201).json(result);
  } catch (error) {
    console.error('Error creating demo form:', error);
    res.status(500).json({ error: 'Failed to create demo form' });
  }
};

exports.getAllDemoForms = async (req, res) => {
  try {
    const forms = await demoFormService.getAllDemoForms();
    res.status(200).json(forms);
  } catch (error) {
    console.error('Error fetching demo forms:', error);
    res.status(500).json({ error: 'Failed to fetch demo forms' });
  }
};

exports.getDemoFormById = async (req, res) => {
  try {
    const { id } = req.params;
    const form = await demoFormService.getDemoFormById(id);
    if (!form) {
      return res.status(404).json({ error: 'Demo form not found' });
    }
    res.status(200).json(form);
  } catch (error) {
    console.error('Error fetching demo form:', error);
    res.status(500).json({ error: 'Failed to fetch demo form' });
  }
};

exports.deleteDemoForm = async (req, res) => {
  try {
    const { id } = req.params;
    await demoFormService.deleteDemoForm(id);
    res.status(200).json({ message: 'Demo form deleted successfully' });
  } catch (error) {
    console.error('Error deleting demo form:', error);
    res.status(500).json({ error: 'Failed to delete demo form' });
  }
};
