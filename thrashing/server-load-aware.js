import fastify from 'fastify'
import underPressure from '@fastify/under-pressure'
import { setTimeout as sleep } from 'timers/promises'

const server = fastify()

server.register(underPressure, {
  maxEventLoopDelay: 200,
  maxEventLoopUtilization: 0.80,

  // Do nothing, let the request go through normally
  pressureHandler: (req, rep) => {}
})

server.get('/', async (request, reply) => {
  // Simulate a database query
  await sleep(Math.floor(Math.random() * 100))

  if (!server.isUnderPressure()) {
    for (let i = 0; i < 100000000; i++) {
      // Simulate CPU intensive task
    }
  } else {
    // Use cached value
  }
  return 'Hello World'
})

await server.listen({ port: 3000 })
