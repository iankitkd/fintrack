import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "#/generated/prisma/client.ts";
import { config } from "#/config/index.ts";
import bcrypt from "bcrypt";

const connectionString = `${config.databaseUrl}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const password = await bcrypt.hash("admin123", 10);

  await prisma.user.create({
    data: {
      email: "admin@fintrack.com",
      password,
      role: "ADMIN",
    },
  });

  console.log("Admin user created");
}

main()
  .then(async () => {})
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
