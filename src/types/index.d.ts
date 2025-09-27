import { AwilixContainer } from "awilix";
import { EnvConfig } from "./env.type.js";
import { MockData } from "./mocks.type.js";
import { PrismaClient } from "@prisma/client";
import { ChatOpenAI } from "@langchain/openai";
import { Cradle } from "./di-container.type.js";

declare module "fastify" {
    export interface FastifyInstance {
        config: EnvConfig;
        prisma: PrismaClient;
        di: AwilixContainer<Cradle>;
        openai: ChatOpenAI;
        mocks: MockData;
    }
}
