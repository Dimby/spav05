/*
  Warnings:

  - Added the required column `type` to the `Mpitandrina` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Mpitandrina` ADD COLUMN     `type` ENUM('MPITANDRINA', 'KATEKISTA_DELEGUE') NOT NULL;
