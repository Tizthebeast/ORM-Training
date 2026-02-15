-- CreateTable
CREATE TABLE `Store` (
    `Stored` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Store_Stored_key`(`Stored`),
    PRIMARY KEY (`Stored`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
