-- AlterTable
ALTER TABLE "bookings" ADD COLUMN     "calculatedPrice" INTEGER,
ADD COLUMN     "distanceKm" DOUBLE PRECISION,
ADD COLUMN     "durationHours" DOUBLE PRECISION;

-- CreateTable
CREATE TABLE "settings" (
    "id" TEXT NOT NULL,
    "pricingType" TEXT NOT NULL DEFAULT 'kilometer',
    "pricePerKilometer" DOUBLE PRECISION,
    "pricePerHour" DOUBLE PRECISION,
    "basePrice" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "minimumPrice" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "settings_pkey" PRIMARY KEY ("id")
);
