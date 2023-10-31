/*
  Warnings:

  - You are about to drop the column `discountPercent` on the `Product` table. All the data in the column will be lost.
  - Added the required column `discountPercentage` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "discountPercent",
ADD COLUMN     "discountPercentage" INTEGER NOT NULL;
