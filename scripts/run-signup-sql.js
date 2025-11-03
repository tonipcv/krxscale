/* eslint-disable */
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const sql = `
  CREATE TABLE IF NOT EXISTS "Signup" (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    company TEXT NOT NULL,
    role TEXT NOT NULL,
    arr TEXT NOT NULL,
    markets TEXT NOT NULL,
    "isUS" BOOLEAN NOT NULL,
    country TEXT NULL,
    intent TEXT NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW()
  );`;

  console.log('Executing SQL to ensure table "Signup" exists...');
  await prisma.$executeRawUnsafe(sql);
  console.log('Done.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
