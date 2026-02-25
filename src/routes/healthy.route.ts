import { healthyHandler } from "../handlers/healthy.handler";
import { FastifyInstance } from "fastify";

export default async function (fastify: FastifyInstance) {
    fastify.get('/health', {
        handler: healthyHandler
    })
}