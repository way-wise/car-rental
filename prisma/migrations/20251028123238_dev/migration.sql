/*
  Warnings:

  - The values [kilometer] on the enum `PricingType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `pricePerKilometer` on the `settings` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "HolidayFeeType" AS ENUM ('flat', 'percentage');

-- AlterEnum
BEGIN;
CREATE TYPE "PricingType_new" AS ENUM ('mile', 'hour');
ALTER TABLE "public"."settings" ALTER COLUMN "pricingType" DROP DEFAULT;
ALTER TABLE "settings" ALTER COLUMN "pricingType" TYPE "PricingType_new" USING ("pricingType"::text::"PricingType_new");
ALTER TYPE "PricingType" RENAME TO "PricingType_old";
ALTER TYPE "PricingType_new" RENAME TO "PricingType";
DROP TYPE "public"."PricingType_old";
ALTER TABLE "settings" ALTER COLUMN "pricingType" SET DEFAULT 'mile';
COMMIT;

-- AlterTable
ALTER TABLE "settings" DROP COLUMN "pricePerKilometer",
ADD COLUMN     "pricePerMile" DOUBLE PRECISION,
ALTER COLUMN "pricingType" SET DEFAULT 'mile',
ALTER COLUMN "minimumPrice" SET DEFAULT 10.0;
