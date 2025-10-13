-- CreateTable
CREATE TABLE "maintenance" (
    "id" TEXT NOT NULL,
    "currentOdometer" DOUBLE PRECISION NOT NULL,
    "previousOdometer" DOUBLE PRECISION NOT NULL,
    "fuelVolume" DOUBLE PRECISION NOT NULL,
    "fuelUnitPrice" DOUBLE PRECISION NOT NULL,
    "fuelCost" DOUBLE PRECISION NOT NULL,
    "mileage" DOUBLE PRECISION NOT NULL,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "maintenance_pkey" PRIMARY KEY ("id")
);
