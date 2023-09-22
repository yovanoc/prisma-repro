import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

const { id } = await client.firstTable.findFirstOrThrow({});

const first = await client.firstTable.update({
	where: { id },
	data: {
		second: {
			update: {
				third: {
					update: {
						data1: 1,
						data2: 2,
						wrappedData1: {
							update: {
								data1: 1,
								data2: 2,
								data3: 3,
							},
						},
                        wrappedData2: {
							update: {
								data1: 4,
								data2: 5,
								data3: 6,
							},
						},
					},
				},
			},
		},
	},
});

console.dir(first, { depth: 5 });