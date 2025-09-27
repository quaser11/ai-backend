import path from "path";
import fp from "fastify-plugin";
import { readFile } from "fs/promises";
import { FastifyInstance } from "fastify";
import { FastifyPlugin } from "@/lib/fastify/fastify.constant.js";
import type { MockAction, MockData, MockProfile, MockProject, MockUser } from "@/types/mocks.type.js";

const readJson = async <T>(fastify: FastifyInstance, fileName: string): Promise<T> => {
    const filePath = path.join(process.cwd(), fileName);

    try {
        const content = await readFile(filePath, { encoding: "utf-8" });

        return JSON.parse(content) as T;
    } catch (error) {
        fastify.log.warn({ err: error, filePath }, "failed to read mock JSON file");

        return [] as unknown as T;
    }
};

const configureMocks = async (fastify: FastifyInstance) => {
    const users = await readJson<MockUser[]>(fastify, "users.json");
    const profiles = await readJson<MockProfile[]>(fastify, "profiles.json");
    const projects = await readJson<MockProject[]>(fastify, "projects.json");
    const actions = await readJson<MockAction[]>(fastify, "actions.json");

    const mocks: MockData = {
        users,
        profiles,
        projects,
        actions,
    };

    fastify.decorate("mocks", mocks);
};

export default fp(configureMocks, {
    name: FastifyPlugin.Mocks,
    dependencies: [FastifyPlugin.Env],
});


