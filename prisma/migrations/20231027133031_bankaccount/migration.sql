-- AlterTable
ALTER TABLE "BankAccount" ALTER COLUMN "account_number" SET DATA TYPE BIGINT;

-- CreateTable
CREATE TABLE "TipeTransaksi" (
    "id" SERIAL NOT NULL,
    "nama_tipe" TEXT NOT NULL,

    CONSTRAINT "TipeTransaksi_pkey" PRIMARY KEY ("id")
);
