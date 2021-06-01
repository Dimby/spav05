/*
  Warnings:

  - Added the required column `name` to the `PS` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `PS` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Fifandraisana` ADD COLUMN     `psId` VARCHAR(191);

-- AlterTable
ALTER TABLE `PS` ADD COLUMN     `name` VARCHAR(191) NOT NULL,
    ADD COLUMN     `firstName` VARCHAR(191) NOT NULL,
    ADD COLUMN     `email` VARCHAR(191),
    ADD COLUMN     `nameWife` VARCHAR(191);

-- AddForeignKey
ALTER TABLE `Fifandraisana` ADD FOREIGN KEY (`psId`) REFERENCES `PS`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
