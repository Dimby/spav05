-- CreateTable
CREATE TABLE `Birao` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `fonction` VARCHAR(191) NOT NULL,
    `titre` VARCHAR(191) NOT NULL,
    `fitMis` VARCHAR(191) NOT NULL,
    `urlPicture` VARCHAR(191),
    `urlPicturePublic` VARCHAR(191),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
