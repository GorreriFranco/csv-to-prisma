-- CreateTable
CREATE TABLE "IceCream" (
    "id" TEXT NOT NULL,
    "flavor" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "type" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "IceCream_pkey" PRIMARY KEY ("id")
);
