import fastify from 'fastify'
import underPressure from '@fastify/under-pressure'

const server = fastify()

server.register(underPressure, {
  maxEventLoopDelay: 200,
  maxEventLoopUtilization: 0.80
})

server.register(import('./route.js'))

await server.listen({ port: 3000 })
