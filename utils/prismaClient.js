const { PrismaClient } = require('../generated/prisma'); // 👈 NOT from '@prisma/client'

const prisma = new PrismaClient();

module.exports = prisma;
