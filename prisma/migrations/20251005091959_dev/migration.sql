/*
  Warnings:

  - You are about to drop the column `totalPoints` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `BodyPart` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DemoCenter` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DemoCenterEquipment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Equipment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ExLibBodyPart` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ExLibEquipment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ExLibRak` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ExSetupBodyPart` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ExSetupEquipment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ExSetupRak` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ExerciseLibraryVideo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ExerciseSetup` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Rack` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `content_stats` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ratings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `reactions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `reward_points` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `views` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DemoCenterEquipment" DROP CONSTRAINT "DemoCenterEquipment_demoCenterId_fkey";

-- DropForeignKey
ALTER TABLE "DemoCenterEquipment" DROP CONSTRAINT "DemoCenterEquipment_equipmentId_fkey";

-- DropForeignKey
ALTER TABLE "ExLibBodyPart" DROP CONSTRAINT "ExLibBodyPart_bodyPartId_fkey";

-- DropForeignKey
ALTER TABLE "ExLibBodyPart" DROP CONSTRAINT "ExLibBodyPart_exLibraryId_fkey";

-- DropForeignKey
ALTER TABLE "ExLibEquipment" DROP CONSTRAINT "ExLibEquipment_equipmentId_fkey";

-- DropForeignKey
ALTER TABLE "ExLibEquipment" DROP CONSTRAINT "ExLibEquipment_exLibraryId_fkey";

-- DropForeignKey
ALTER TABLE "ExLibRak" DROP CONSTRAINT "ExLibRak_exLibraryId_fkey";

-- DropForeignKey
ALTER TABLE "ExLibRak" DROP CONSTRAINT "ExLibRak_rackId_fkey";

-- DropForeignKey
ALTER TABLE "ExSetupBodyPart" DROP CONSTRAINT "ExSetupBodyPart_bodyPartId_fkey";

-- DropForeignKey
ALTER TABLE "ExSetupBodyPart" DROP CONSTRAINT "ExSetupBodyPart_exSetupId_fkey";

-- DropForeignKey
ALTER TABLE "ExSetupEquipment" DROP CONSTRAINT "ExSetupEquipment_equipmentId_fkey";

-- DropForeignKey
ALTER TABLE "ExSetupEquipment" DROP CONSTRAINT "ExSetupEquipment_exSetupId_fkey";

-- DropForeignKey
ALTER TABLE "ExSetupRak" DROP CONSTRAINT "ExSetupRak_exSetupId_fkey";

-- DropForeignKey
ALTER TABLE "ExSetupRak" DROP CONSTRAINT "ExSetupRak_rackId_fkey";

-- DropForeignKey
ALTER TABLE "ExerciseLibraryVideo" DROP CONSTRAINT "ExerciseLibraryVideo_userId_fkey";

-- DropForeignKey
ALTER TABLE "ExerciseSetup" DROP CONSTRAINT "ExerciseSetup_userId_fkey";

-- DropForeignKey
ALTER TABLE "content_stats" DROP CONSTRAINT "content_stats_exerciseId_fkey";

-- DropForeignKey
ALTER TABLE "content_stats" DROP CONSTRAINT "content_stats_libraryId_fkey";

-- DropForeignKey
ALTER TABLE "ratings" DROP CONSTRAINT "ratings_exerciseId_fkey";

-- DropForeignKey
ALTER TABLE "ratings" DROP CONSTRAINT "ratings_libraryId_fkey";

-- DropForeignKey
ALTER TABLE "ratings" DROP CONSTRAINT "ratings_userId_fkey";

-- DropForeignKey
ALTER TABLE "reactions" DROP CONSTRAINT "reactions_exerciseId_fkey";

-- DropForeignKey
ALTER TABLE "reactions" DROP CONSTRAINT "reactions_libraryId_fkey";

-- DropForeignKey
ALTER TABLE "reactions" DROP CONSTRAINT "reactions_userId_fkey";

-- DropForeignKey
ALTER TABLE "reward_points" DROP CONSTRAINT "reward_points_userId_fkey";

-- DropForeignKey
ALTER TABLE "views" DROP CONSTRAINT "views_exerciseId_fkey";

-- DropForeignKey
ALTER TABLE "views" DROP CONSTRAINT "views_libraryId_fkey";

-- DropForeignKey
ALTER TABLE "views" DROP CONSTRAINT "views_userId_fkey";

-- DropIndex
DROP INDEX "users_banExpires_idx";

-- DropIndex
DROP INDEX "users_banned_idx";

-- DropIndex
DROP INDEX "users_emailVerified_idx";

-- DropIndex
DROP INDEX "users_email_idx";

-- DropIndex
DROP INDEX "users_name_idx";

-- DropIndex
DROP INDEX "users_role_idx";

-- DropIndex
DROP INDEX "users_totalPoints_idx";

-- AlterTable
ALTER TABLE "accounts" ALTER COLUMN "createdAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "sessions" ALTER COLUMN "createdAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "totalPoints",
ALTER COLUMN "createdAt" DROP DEFAULT;

-- DropTable
DROP TABLE "BodyPart";

-- DropTable
DROP TABLE "DemoCenter";

-- DropTable
DROP TABLE "DemoCenterEquipment";

-- DropTable
DROP TABLE "Equipment";

-- DropTable
DROP TABLE "ExLibBodyPart";

-- DropTable
DROP TABLE "ExLibEquipment";

-- DropTable
DROP TABLE "ExLibRak";

-- DropTable
DROP TABLE "ExSetupBodyPart";

-- DropTable
DROP TABLE "ExSetupEquipment";

-- DropTable
DROP TABLE "ExSetupRak";

-- DropTable
DROP TABLE "ExerciseLibraryVideo";

-- DropTable
DROP TABLE "ExerciseSetup";

-- DropTable
DROP TABLE "Rack";

-- DropTable
DROP TABLE "content_stats";

-- DropTable
DROP TABLE "ratings";

-- DropTable
DROP TABLE "reactions";

-- DropTable
DROP TABLE "reward_points";

-- DropTable
DROP TABLE "views";

-- DropEnum
DROP TYPE "ReactionType";

-- DropEnum
DROP TYPE "RewardType";
