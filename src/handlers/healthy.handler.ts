import { FastifyRequest, FastifyReply } from 'fastify';

export const healthyHandler = async (request: FastifyRequest, reply: FastifyReply) => {
    return { status: "ok" };
};