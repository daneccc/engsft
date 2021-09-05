/*
  Warnings:

  - You are about to drop the column `pSalt` on the `User` table. All the data in the column will be lost.
  - Added the required column `currentPlan` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "uid" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "pHash" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "currentPlan" INTEGER NOT NULL
);
INSERT INTO "new_User" ("createdAt", "email", "firstName", "lastName", "pHash", "uid") SELECT "createdAt", "email", "firstName", "lastName", "pHash", "uid" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User.uid_unique" ON "User"("uid");
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
