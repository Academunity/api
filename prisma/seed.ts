import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const teacher = await prisma.roles.create({
    data: {
      name: "TEACHER",
    },
  });

  const student = await prisma.roles.create({
    data: {
      name: "STUDENT",
    },
  });
  console.log({ teacher, student });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
