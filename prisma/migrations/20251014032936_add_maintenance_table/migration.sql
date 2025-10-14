-- AlterTable
ALTER TABLE "fuelReports" RENAME CONSTRAINT "maintenance_pkey" TO "fuelReports_pkey";

-- CreateTable
CREATE TABLE "maintenance" (
    "id" TEXT NOT NULL,
    "maintenanceType" TEXT NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL,
    "odometerReading" DOUBLE PRECISION NOT NULL,
    "details" TEXT NOT NULL,
    "serviceProvider" TEXT,
    "nextServiceDue" TEXT,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "maintenance_pkey" PRIMARY KEY ("id")
);
