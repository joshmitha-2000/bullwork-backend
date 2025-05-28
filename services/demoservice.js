const prisma = require('../utils/prismaClient');

const createDemoForm = async (data) => {
  return await prisma.demoForm.create({
    data,
    include: { product: true },
  });
};

const getAllDemoForms = async () => {
  return await prisma.demoForm.findMany({
    include: { product: true },
  });
};

const getDemoFormById = async (id) => {
  return await prisma.demoForm.findUnique({
    where: { id: parseInt(id) },
    include: { product: true },
  });
};

const deleteDemoForm = async (id) => {
  return await prisma.demoForm.delete({
    where: { id: parseInt(id) },
  });
};

module.exports = {
  createDemoForm,
  getAllDemoForms,
  getDemoFormById,
  deleteDemoForm,
};
