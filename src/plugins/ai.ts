import fp from "fastify-plugin";
import {FastifyInstance} from "fastify";
import {ChatOpenAI} from "@langchain/openai";
import { FastifyPlugin } from "@/lib/fastify/fastify.constant.js";

export default fp(async (fastify: FastifyInstance) => {
    const openai = new ChatOpenAI({
        model: "gpt-4o-mini",
        temperature: 0.7,
        openAIApiKey: fastify.config.OPENAI_API_KEY,
    });

    fastify.decorate("openai", openai);
}, {
    name: FastifyPlugin.OpenAI,
    dependencies: [FastifyPlugin.Env],
});