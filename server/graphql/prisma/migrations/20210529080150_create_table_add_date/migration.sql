/*
  Warnings:

  - Added the required column `updatedAt` to the `Fifandraisana` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Fitandremana` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Mpitandrina` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Fifandraisana` ADD COLUMN     `updatedAt` DATETIME(3) NOT NULL,
    ADD COLUMN     `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Fitandremana` ADD COLUMN     `updatedAt` DATETIME(3) NOT NULL,
    ADD COLUMN     `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Mpitandrina` ADD COLUMN     `updatedAt` DATETIME(3) NOT NULL,
    ADD COLUMN     `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateTable
CREATE TABLE `PS` (
    `id` VARCHAR(191) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
