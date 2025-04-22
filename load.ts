import { readCSV } from "./csv-parser-utils";
import { IceCream, PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

async function main() {
  const heladosFromCSV = await readCSV<IceCream>("./icecream.csv");
  for (const helado of heladosFromCSV) {
    await prisma.iceCream.create({
      data: {
        ...helado,
        price: parseFloat(helado.price as unknown as string), // Ensure price is a float
      },
    });
  }
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
