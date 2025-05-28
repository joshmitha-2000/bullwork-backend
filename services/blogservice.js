const prisma = require('../utils/prismaClient');

exports.createBlog = async (blogData) => {
  return await prisma.blog.create({
    data: blogData,
  });
};

exports.getAllBlogs = async () => {
  return await prisma.blog.findMany({
    orderBy: { postedOn: 'desc' },
  });
};

exports.getBlogById = async (id) => {
  return await prisma.blog.findUnique({
    where: { id: Number(id) },
  });
};

exports.updateBlog = async (id, blogData) => {
  return await prisma.blog.update({
    where: { id: Number(id) },
    data: blogData,
  });
};

exports.deleteBlog = async (id) => {
  return await prisma.blog.delete({
    where: { id: Number(id) },
  });
};
