-- CreateTable
CREATE TABLE `Sary` (
    `id` VARCHAR(191) NOT NULL,
    `urlPicture` VARCHAR(191),
    `urlPicturePublic` VARCHAR(191),
    `faritraId` VARCHAR(191),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Sary` ADD FOREIGN KEY (`faritraId`) REFERENCES `Faritra`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
