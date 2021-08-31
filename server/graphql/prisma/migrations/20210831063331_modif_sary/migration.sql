/*
  Warnings:

  - Added the required column `titre` to the `Sary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Sary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `anotherDesc` to the `Sary` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `faritraId` ON `fitandremana`;

-- DropIndex
DROP INDEX `mpitandrinaId` ON `fifandraisana`;

-- DropIndex
DROP INDEX `faritraId` ON `sary`;

-- DropIndex
DROP INDEX `psId` ON `fifandraisana`;

-- AlterTable
ALTER TABLE `sary` ADD COLUMN     `titre` VARCHAR(191) NOT NULL,
    ADD COLUMN     `description` VARCHAR(191) NOT NULL,
    ADD COLUMN     `anotherDesc` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Email` ADD FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Fifandraisana` ADD FOREIGN KEY (`mpitandrinaId`) REFERENCES `Mpitandrina`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Fifandraisana` ADD FOREIGN KEY (`psId`) REFERENCES `PS`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Fitandremana` ADD FOREIGN KEY (`mpitandrinaId`) REFERENCES `Mpitandrina`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Fitandremana` ADD FOREIGN KEY (`faritraId`) REFERENCES `Faritra`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sary` ADD FOREIGN KEY (`faritraId`) REFERENCES `Faritra`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
