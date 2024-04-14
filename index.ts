import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

async function main() {
	// Querying the database
	// STEP 01
	// const allUsers = await prisma.user.findMany()
  // console.log(allUsers)

	// STEP 02
	// await prisma.user.create({
	// 	data: {
	// 		name: 'Alice',
	// 		email: 'alice@prisma.io',
	// 		posts: {
	// 			create: { title: 'Hello world' },
	// 		},
	// 		profile: {
	// 			create: { bio: 'I like spaceships.' },
	// 		},
	// 	},
	// })
	// const allUsers = await prisma.user.findMany({
	// 	include: {
	// 		posts: true,
	// 		profile: true,
	// 	},
	// })
	// console.dir(allUsers, { depth: null})

	// STEP 03
	// const post = await prisma.post.update({
	// 	where: {id: 1},
	// 	data: {published: true},
	// })
	// console.log(post)

	// STEP 04
	// const user = await prisma.user.findFirst({
	// 	where: {id: 1},
	// 	include: {
	// 		posts: true,
	// 		profile: true,
	// 	}
	// })
	// console.log(user);

}

main().then(async () => {
	await prisma.$disconnect()
}).catch(async (e) => {
	console.error(e)
	await prisma.$disconnect()
	process.exit(1)
})