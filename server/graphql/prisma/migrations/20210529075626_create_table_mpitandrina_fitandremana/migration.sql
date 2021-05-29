/*
  Warnings:

  - The migration will change the primary key for the `Mpitandrina` table. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Mpitandrina` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The migration will add a unique constraint covering the columns `[mpitandrinaId]` on the table `Fitandremana`. If there are existing duplicate values, the migration will fail.

*/
-- AlterTable
ALTER TABLE `Fitandremana` ADD COLUMN     `mpitandrinaId` INTEGER;

-- AlterTable
ALTER TABLE `Mpitandrina` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- CreateIndex
CREATE UNIQUE INDEX `Fitandremana_mpitandrinaId_unique` ON `Fitandremana`(`mpitandrinaId`);

-- AddForeignKey
ALTER TABLE `Fitandremana` ADD FOREIGN KEY (`mpitandrinaId`) REFERENCES `Mpitandrina`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
