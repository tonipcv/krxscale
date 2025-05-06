/*
  Warnings:

  - You are about to drop the column `audienceSize` on the `Lead` table. All the data in the column will be lost.
  - You are about to drop the column `currentRevenue` on the `Lead` table. All the data in the column will be lost.
  - You are about to drop the column `whatsapp` on the `Lead` table. All the data in the column will be lost.
  - Added the required column `arr` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employees` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `needs` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sector` to the `Lead` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Lead" DROP COLUMN "audienceSize",
DROP COLUMN "currentRevenue",
DROP COLUMN "whatsapp",
ADD COLUMN     "arr" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "employees" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "needs" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "phone" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "sector" TEXT NOT NULL DEFAULT '';
