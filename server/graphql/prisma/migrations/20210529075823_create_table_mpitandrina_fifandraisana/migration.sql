-- AlterTable
ALTER TABLE `Fifandraisana` ADD COLUMN     `mpitandrinaId` INTEGER;

-- AddForeignKey
ALTER TABLE `Fifandraisana` ADD FOREIGN KEY (`mpitandrinaId`) REFERENCES `Mpitandrina`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
