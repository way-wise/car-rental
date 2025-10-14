/*
  Warnings:

  - You are about to drop the column `calculatedPrice` on the `bookings` table. All the data in the column will be lost.
  - You are about to drop the column `distanceKm` on the `bookings` table. All the data in the column will be lost.
  - You are about to drop the column `durationHours` on the `bookings` table. All the data in the column will be lost.
  - You are about to drop the `settings` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "bookings" DROP COLUMN "calculatedPrice",
DROP COLUMN "distanceKm",
DROP COLUMN "durationHours";

-- DropTable
DROP TABLE "public"."settings";
