-- CreateTable
CREATE TABLE "Plan" (
    "pid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "isFree" BOOLEAN NOT NULL,
    "recurrency" TEXT NOT NULL DEFAULT '30 days'
);

-- CreateTable
CREATE TABLE "User" (
    "uid" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "pHash" TEXT NOT NULL,
    "pSalt" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Backup" (
    "bid" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT NOT NULL,
    "bucket" TEXT NOT NULL,
    "filename" TEXT NOT NULL,
    "dataUrl" TEXT NOT NULL,
    "signedUrl" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'created',
    FOREIGN KEY ("createdBy") REFERENCES "User" ("uid") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PublicKey" (
    "kid" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY ("userId") REFERENCES "User" ("uid") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Plan.pid_unique" ON "Plan"("pid");

-- CreateIndex
CREATE UNIQUE INDEX "User.uid_unique" ON "User"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Backup.bid_unique" ON "Backup"("bid");

-- CreateIndex
CREATE UNIQUE INDEX "Backup.filename_unique" ON "Backup"("filename");

-- CreateIndex
CREATE UNIQUE INDEX "Backup.dataUrl_unique" ON "Backup"("dataUrl");

-- CreateIndex
CREATE UNIQUE INDEX "Backup.signedUrl_unique" ON "Backup"("signedUrl");

-- CreateIndex
CREATE UNIQUE INDEX "PublicKey.kid_unique" ON "PublicKey"("kid");

-- CreateIndex
CREATE UNIQUE INDEX "PublicKey_userId_unique" ON "PublicKey"("userId");
