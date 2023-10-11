import fastify from 'fastify'

const server = fastify()

server.register(import('./route.js'))

await server.listen({ port: 3000 })
