const prisma = require('../utils/prismaClient');

const createProduct = async (data) => {
  return prisma.product.create({ data });
};

const getAllProducts = async () => {
  return prisma.product.findMany();
};

const getProductById = async (id) => {
  return prisma.product.findUnique({
    where: { id },
    include: {
      features: true,
    },
  });
};

const updateProduct = async (id, data) => {
  return prisma.product.update({
    where: { id },
    data,
  });
};

const deleteProduct = async (id) => {
  return prisma.product.delete({
    where: { id },
  });
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
