const prisma = require('../utils/prismaClient');

exports.createOrder = async (orderData) => {
  const {
    name,
    phoneNumber,
    email,
    address,
    country,
    state,
    city,
    pincode,
    aadharNumber,
    panNumber,
    orderType,
    message,
    productId,
  } = orderData;

  const newOrder = await prisma.order.create({
    data: {
      name,
      phoneNumber,
      email,
      address,
      country,
      state,
      city,
      pincode,
      aadharNumber,
      panNumber,
      orderType,
      message,
      product: {
        connect: { id: productId },
      },
    },
    include: {
      product: true,
    },
  });

  return newOrder;
};

exports.getAllOrders = async () => {
  return await prisma.order.findMany({
    include: { product: true },
  });
};

exports.getOrderById = async (orderId) => {
  return await prisma.order.findUnique({
    where: { id: orderId },
    include: { product: true },
  });
};
