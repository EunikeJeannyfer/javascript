/*
  Warnings:

  - You are about to alter the column `account_number` on the `BankAccount` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "BankAccount" ALTER COLUMN "account_number" SET DATA TYPE INTEGER;
