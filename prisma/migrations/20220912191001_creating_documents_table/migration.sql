-- CreateEnum
CREATE TYPE "docType" AS ENUM ('RG', 'CNH');

-- CreateTable
CREATE TABLE "Documents" (
    "id" SERIAL NOT NULL,
    "type" "docType" NOT NULL,
    "userId" INTEGER NOT NULL,
    "fullName" TEXT NOT NULL,
    "emissionDate" TEXT NOT NULL,
    "expiryDate" TEXT NOT NULL,
    "registerNumber" TEXT NOT NULL,
    "issuingBody" TEXT NOT NULL,

    CONSTRAINT "Documents_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Documents" ADD CONSTRAINT "Documents_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
