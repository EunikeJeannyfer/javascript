-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_destination_account_number_fkey";

-- AlterTable
ALTER TABLE "Transaction" ALTER COLUMN "destination_account_number" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_destination_account_number_fkey" FOREIGN KEY ("destination_account_number") REFERENCES "BankAccount"("account_number") ON DELETE SET NULL ON UPDATE CASCADE;
