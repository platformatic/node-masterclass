import fastify from 'fastify'
import underPressure from '@fastify/under-pressure'
import { setTimeout as sleep } from 'timers/promises'

const server = fastify()

server.register(underPressure, {
  maxEventLoopDelay: 200,
  maxEventLoopUtilization: 0.80
})

server.get('/', async (request, reply) => {
  // Simulate a database query
  await sleep(20)

  for (let i = 0; i < 100000000; i++) {
    // Simulate CPU intensive task
  }
  return 'Hello World'
})

await server.listen({ port: 3000 })
