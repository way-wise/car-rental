// import { hashPassword } from "better-auth/crypto";
// import prisma from "../lib/prisma";
// import { UserRole } from "./generated/enums";

// async function main(total: number) {
//   await prisma.$transaction(async (tx) => {
//     // Create admin
//     const users = [
//       {
//         name: "admin",
//         email: "admin@gmail.com",
//         emailVerified: true,
//         role: UserRole.admin,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//     ];

//     await tx.users.createMany({
//       data: users,
//       skipDuplicates: true,
//     });

//     // Get created user IDs
//     const userIds = await tx.users.findMany({
//       select: { id: true },
//       take: 1,
//     });

//     // Create accounts for users with same password
//     const password = await hashPassword("12345678");
//     await tx.accounts.createMany({
//       data: userIds.map(({ id }) => ({
//         userId: id,
//         accountId: id,
//         providerId: "credential",
//         password,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       })),
//     });

//     // Note: Rewards functionality removed from schema
//     // If you need rewards, add the rewardPoints model back to schema.prisma
//   });
// }

// main(1)
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
