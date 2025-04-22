import { readCSV } from "./csv-parser-utils";
import { IceCream, PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

async function main() {
  const heladosOnDB = await prisma.iceCream.findMany();

  console.log("Icecream on db:");
  heladosOnDB.forEach((helado) => {
    console.log(`- ${helado.flavor}: $${helado.price}`);
  }
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
