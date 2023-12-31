import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

const main = async () => {
  const password = await hash("123", 12);
  const user = await prisma.user.upsert({
    where: { email: "admin@admin10.com" },
    update: {},
    create: {
      email: "admin@admin10.com",
      name: "Admin",
      password,
      role: "ADMIN",
    },
  });
};
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
