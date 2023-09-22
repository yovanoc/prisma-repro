import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

await client.firstTable.create({
	data: {
		second: {
			create: {
				third: {
                    create: {
                        wrappedData1: {
                            create: {}
                        },
                        wrappedData2: {
                            create: {}
                        }
                    }
                },
			},
		},
	},
});

console.log("Done");