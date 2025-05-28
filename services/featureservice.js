const prisma = require('../utils/prismaClient');

exports. getFeaturesByProductId = async (productId) => {
  return await prisma.feature.findMany({
    where: { productId: Number(productId) },
  });
};

exports. getFeatureById = async (id) => {
  return await prisma.feature.findUnique({
    where: { id: Number(id) },
  });
};

exports.createFeature = async (data) => {
  return await prisma.feature.create({
    data,
  });
};

exports. updateFeature = async (id, data) => {
  return await prisma.feature.update({
    where: { id: Number(id) },
    data,
  });
};

exports.  deleteFeature = async (id) => {
  return await prisma.feature.delete({
    where: { id: Number(id) },
  });
};
