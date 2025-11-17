-- CreateEnum
CREATE TYPE "Role" AS ENUM ('OWNER', 'SELLER', 'CLIENT', 'ADMIN');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'CLIENT';
