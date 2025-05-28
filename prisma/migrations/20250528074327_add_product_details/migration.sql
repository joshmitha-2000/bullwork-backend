/*
  Warnings:

  - You are about to drop the `Dashboard` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SpecificationCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SpecificationParameter` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Dashboard" DROP CONSTRAINT "Dashboard_productId_fkey";

-- DropForeignKey
ALTER TABLE "SpecificationCategory" DROP CONSTRAINT "SpecificationCategory_productId_fkey";

-- DropForeignKey
ALTER TABLE "SpecificationParameter" DROP CONSTRAINT "SpecificationParameter_categoryId_fkey";

-- DropTable
DROP TABLE "Dashboard";

-- DropTable
DROP TABLE "SpecificationCategory";

-- DropTable
DROP TABLE "SpecificationParameter";
