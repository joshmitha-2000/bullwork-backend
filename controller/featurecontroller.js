const featureService = require('../services/featureservice');

exports.getFeatures = async (req, res) => {
  const { productId } = req.params;
  try {
    const features = await featureService.getFeaturesByProductId(productId);
    res.json(features);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getFeature = async (req, res) => {
  const { id } = req.params;
  try {
    const feature = await featureService.getFeatureById(id);
    if (!feature) return res.status(404).json({ message: "Feature not found" });
    res.json(feature);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createFeature = async (req, res) => {
  const data = req.body;
  try {
    const feature = await featureService.createFeature(data);
    res.status(201).json(feature);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateFeature = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const feature = await featureService.updateFeature(id, data);
    res.json(feature);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteFeature = async (req, res) => {
  const { id } = req.params;
  try {
    await featureService.deleteFeature(id);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


