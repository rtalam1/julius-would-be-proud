import Fastify from "fastify";
import healthRoutes from './src/routes/healthy.route';

const fastify = Fastify({
    logger: true
})
fastify.register(healthRoutes);

fastify.get("/", async (request, reply) => {
    return { hello: "world" }
})

const start = async () => {
    try {
        await fastify.listen({ port: 3000 })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()