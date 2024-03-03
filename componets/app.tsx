import { prisma } from '../client'

async function main() {
  const allUsers = await prisma.employees.findMany();
}

main()
