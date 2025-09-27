import { EnvConfig } from "./env.type.js";
import { RecommendationService } from "@/modules/recommendation/recommendation.service.js";
import { RecommendationHandler } from "@/modules/recommendation/recommendation.handler.js";
import { MockData } from "./mocks.type.js";
import { FastifyBaseLogger } from "fastify";
import { ChatOpenAI } from "@langchain/openai";
import { PrismaClient } from "@prisma/client/extension";

export type Cradle = {
    log: FastifyBaseLogger;
    prisma: PrismaClient;
    config: EnvConfig;

    recommendationService: RecommendationService;
    recommendationHandler: RecommendationHandler;
    model: ChatOpenAI;
    mocks: MockData;
};
