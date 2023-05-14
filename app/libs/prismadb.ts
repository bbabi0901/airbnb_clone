import { PrismaClient } from "@prisma/client";

// global definition of prisma
declare global {
  var prisma: PrismaClient | undefined;
}

// client that search for globalThis.prisma or creates new client
const client = globalThis.prisma || new PrismaClient();

// if environment is not production set globalThis.primsa to newly generated client
if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

export default client;
